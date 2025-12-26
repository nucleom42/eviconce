class TimeSlot < Rubee::SequelObject
  attr_accessor :id, :start_time, :end_time, :day, :employee_id, :client_id,
    :company_id, :state, :created, :updated

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
        end_time < Time.end_of_today &&
        end_time.to_date.to_s == day.to_s
      })
    attribute(:day).required.type(Date).condition(-> { day > (Date.today - 1) })
    attribute(:employee_id).required.type(Integer)
    attribute(:client_id).optional.type(Integer)
    attribute(:company_id).required.type(Integer)
    attribute(:state).required.type(Integer).condition(-> { (0..4).include?(state) })
  end

  holds :employee
  holds :client
  holds :company

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

  def overlapping?(date, request_from, request_to)
    return false if cancelled?

    day.to_s == date.to_s &&
      !((request_from.days_seconds < start_time.days_seconds && request_to.days_seconds < start_time.days_seconds) ||
         (request_from.days_seconds > end_time.days_seconds && request_to.days_seconds > end_time.days_seconds))
  end
end
