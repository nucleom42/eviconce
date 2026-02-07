class Window < Rubee::SequelObject
  WEEKS = [0, 1, 2, 3, 4, 5, 6].freeze
  WEEKENDS = [0, 6].freeze
  attr_accessor :id, :start_time, :end_time, :break_from, :break_to,
    :weekends, :effective_date, :end_date, :created, :updated

  before :save, ->(m) { m.weekends = Sequel.pg_array(m.weekends) }

  validate do
    attribute(:start_time).required.type(Time)
      .condition(-> { start_time < end_time }, "Start time can't be greater than end time")
    attribute(:end_time).required.type(Time)
    attribute(:break_from).required.type(Time)
      .condition(-> { break_from < break_to }, "Break from can't be greater than break to")
    attribute(:break_to).required.type(Time)
    attribute(:effective_date).required.type(Date)
      .condition(
        -> { !end_date || end_date && effective_date.to_time <= end_date.to_time.end_of_day },
        'End date can not be less than effective date'
      )
      .condition(
        -> { persisted? || effective_date.to_time >= Date.today.to_time.beginning_of_day },
        'Effective date can not be in the past'
      )
    attribute(:end_date).optional.type(Date)
      .condition(-> { effective_date <= end_date })
      .condition(-> { !persisted? || persisted? && !any_windows_intersects? }, 'Window intersects with another window')
    attribute(:weekends).required
      .condition(-> { weekends.uniq.size == weekends.size && weekends.all? { |w| WEEKS.include?(w) } })
  end

  before :destroy, ->(m) do
    raise Rubee::Validatable::Error, 'Window has time slots, remove them first' if m.has_time_slots?
  end

  def all_time_slots_available?
    # We want to make sure all time slots within the window are available
    TimeSlot.where(employee_id: employees.map(&:id), day: (effective_date..end_date)).all?(&:available?)
  end

  owns_many :employees, over: :employee_windows

  def any_windows_intersects?
    employee_ids = employees.map(&:id)
    return false if employee_ids.empty?

    sql = <<~SQL
      SELECT EXISTS (
        SELECT 1
        FROM windows
        JOIN employee_windows
          ON employee_windows.window_id = windows.id
        WHERE employee_windows.employee_id IN ?
          AND windows.id != ?
          AND windows.effective_date <= ?
          AND (
            windows.end_date IS NULL
            OR windows.end_date >= ?
          )
      ) AS intersects
      SQL

    Rubee::SequelObject::DB.fetch(
      sql,
      employee_ids,
      id,
      end_date || Date.new(9999, 12, 31),
      effective_date
    ).get(:intersects)
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

  def previous_endless
    Window
      .dataset
      .where(end_date: nil)
      .join(:employee_windows, window_id: :id)
      .where(Sequel[:employee_windows][:employee_id] => employees.map(&:id))
      .where(Sequel[:windows][:effective_date] < effective_date)
      .order(Sequel.desc(:effective_date)).select_all(:windows)
      .limit(1).then { |ds| Window.serialize(ds) }&.first
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
