class Window < Rubee::SequelObject
  WEEKS = [0, 1, 2, 3, 4, 5, 6].freeze
  WEEKENDS = [0, 6].freeze
  attr_accessor :id, :start_time, :end_time, :break_from, :break_to,
    :weekends, :effective_date, :end_date, :created, :updated

  before :save, ->(m) { m.weekends = Sequel.pg_array(m.weekends) }

  validate do
    attribute(:start_time).required.type(Time).condition(-> { start_time < end_time })
    attribute(:end_time).required.type(Time).condition(-> { start_time < end_time })
    attribute(:break_from).required.type(Time).condition(-> { break_from < break_to })
    attribute(:break_to).required.type(Time).condition(-> { break_from < break_to })
    attribute(:effective_date).required.type(Date)
      .condition(
        -> { !end_date || end_date && effective_date.to_time < end_date.to_time.end_of_day },
        'End date can not be less than effective date'
      )
      .condition(
        -> { effective_date.to_time >= Date.today.to_time.beginning_of_day },
        'Effective date can not be in the past'
      )
      .condition(
        -> { !any_windows_with_effective_date_eq_or_later? },
        "Window with effective date greater or eq than #{effective_date} already exists"
      )
      .condition(-> { !has_time_slots? }, 'Window has time slots')
    attribute(:end_date).optional.type(Date).condition(-> { effective_date < end_date })
    attribute(:weekends).required
      .condition(-> { weekends.uniq.size == weekends.size && weekends.all? { |w| WEEKS.include?(w) } })
  end

  owns_many :employees, over: :employee_windows

  def any_windows_with_effective_date_eq_or_later?
    employee_ids = employees.map(&:id)
    return false if employee_ids.empty?

    !!Window.dataset.join(:employee_windows, window_id: :id)
      .where(Sequel[:windows][:effective_date] >= effective_date)
      .where(Sequel[:employee_windows][:employee_id] => employee_ids)
      .exclude(Sequel[:windows][:id] => id)
      .get(1)
  end

  def any_windows_with_effective_date_eq_or_later!
    if any_windows_with_effective_date_eq_or_later?
      raise Rubee::Validatable::Error, "Window with effective date greater or eq than #{effective_date} already exists"
    end
  end

  def has_time_slots?
    !!TimeSlot
      .dataset
      .where(employee_id: employees.map(&:id), day: effective_date..end_date)
      .get(1)
  end

  def add_employees(*employees)
    employees.map { |e| EmployeeWindow.create(employee_id: e.id, window_id: id) }
  end

  def within_work_hours?(request_from, request_to)
    request_from.days_seconds >= start_time.days_seconds && request_to.days_seconds <= end_time.days_seconds
  end

  def overlapping_break?(request_from, request_to)
    break_from_sec = break_from.days_seconds
    break_to_sec = break_to.days_seconds

    !((request_from.days_seconds <= break_from_sec && request_to.days_seconds <= break_from_sec) ||
       (request_from.days_seconds >= break_to_sec && request_to.days_seconds >= break_to_sec))
  end

  def weekends?(date)
    WEEKENDS.include?(date.wday)
  end
end
