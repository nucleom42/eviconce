class TimeSlot < Rubee::SequelObject
  attr_accessor :id, :start_time, :end_time, :day, :employee_id, :client_id,
    :company_id, :service_id, :state, :price, :created, :updated

  STATES = {
    0 => 'scheduled', # scheduled but not confirmed
    1 => 'booked',    # shcheduled and confirmed
    2 => 'canceled',  # canceled by employee or client
    3 => 'frozen',    # placeholder set by employee without ability to book
    4 => 'done',      # completed
  }.freeze

  validate do
    attribute(:start_time).required.type(Time)
      .condition(
        -> {
          start_time < end_time &&
          start_time > Time.beginning_of_today &&
          start_time.to_date.to_s == day.to_s
        }
      )
    attribute(:end_time).required.type(Time)
      .condition(-> {
        start_time < end_time &&
        end_time.to_date.to_s == day.to_s
      })
    attribute(:day).required.type(Date).condition(-> { day > (Date.today - 1) })
    attribute(:employee_id).required.type(Integer)
    attribute(:client_id).condition(-> { scheduled? ? client_id : true }, 'Клієнт повинен бути заданий')
    attribute(:company_id).required.type(Integer)
    attribute(:service_id).optional.type(Integer)
    attribute(:price).optional.type(Float).condition(-> { price >= 0 })
    attribute(:state).required.type(Integer).condition(-> { (0..4).include?(state) })
  end

  before :save, :check_overlapping!

  holds :employee
  holds :client
  holds :company
  holds :service

  def booked?
    status == 'booked'
  end

  def scheduled?
    status == 'scheduled'
  end

  def cancelled?
    status == 'canceled'
  end

  def status
    STATES[state]
  end

  # Durarion in minutes
  def duration
    (end_time - start_time) / 60
  end

  def employee_available?
    slots_employee = employee
    if slots_employee.available?(start_time..end_time, id)
      true
    else
      add_error(slots_employee.errors.keys.first, slots_employee.errors[:availability])
      false
    end
  end

  def check_overlapping!
    raise Rubee::Validatable::Error, errors[:availability] unless employee_available?
  end

  def overlapping?(date, request_from, request_to)
    return false if cancelled?
    return false unless day.to_s == date.to_s

    (start_time.days_seconds < request_to.days_seconds) && (end_time.days_seconds > request_from.days_seconds)
  end

  def serialized_hash
    {
      id: id,
      start_time: start_time,
      end_time: end_time,
      day: day,
      employee_id: employee_id,
      client_id: client_id,
      company_id: company_id,
      state: status,
    }
  end

  class << self
    def status_to_state(status)
      return unless status.is_a?(String)
      return 0 if status == 'preview'

      STATES.key(status)
    end
  end
end
