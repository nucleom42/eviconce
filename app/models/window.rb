class Window < Rubee::SequelObject
  WEEKS = [0, 1, 2, 3, 4, 5, 6].freeze
  WEEKENDS = [0, 6].freeze

  attr_accessor :id,
    :start_time,
    :end_time,
    :break_from,
    :break_to,
    :weekends,
    :effective_date,
    :end_date,
    :created,
    :updated,
    :employee_id

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
    attribute(:employee_id).required
  end

  before :destroy, ->(m) do
    raise Rubee::Validatable::Error, 'Window has time slots, remove them first' if m.has_time_slots?
  end

  def all_time_slots_available?
    # We want to make sure all time slots within the window are available
    TimeSlot.where(employee_id: employee_id, day: (effective_date..end_date)).all?(&:available?)
  end

  holds :employee

  def any_windows_intersects?
    sql = <<~SQL
      SELECT EXISTS (
        SELECT 1
        FROM windows
        WHERE windows.employee_id = ?
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
      employee_id,
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
      .where(employee_id: employee_id, day: effective_date..end_date)
      .get(1)
  end

  def previous_endless
    Window
      .dataset
      .where(end_date: nil)
      .where(Sequel[:windows][:employee_id] => employee_id)
      .where(Sequel[:windows][:effective_date] < effective_date)
      .order(Sequel.desc(:effective_date)).select_all(:windows)
      .limit(1).then { |ds| Window.serialize(ds) }&.first
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
