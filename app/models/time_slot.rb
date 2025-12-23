class TimeSlot < Rubee::SequelObject
  attr_accessor :id, :start_time, :end_time, :day, :employee_id, :client_id,
    :company_id, :state, :created, :updated

  STATES = {
    0 => 'scheduled',
    1 => 'booked',
    2 => 'canceled',
    3 => 'in_progress',
    4 => 'done',
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
    attribute(:state).required.type(Integer).condition(-> { [0, 4].include?(state) })
  end

  holds :employee
  holds :client
  holds :company

  def booked?
    STATES[state] == 'booked'
  end

  def scheduled?
    STATES[state] == 'scheduled'
  end

  def overlapping_booked?(date, request_from, request_to)
    !scheduled? &&
    day.to_s == date.to_s &&
    !((request_from < time_from.days_seconds && request_to < time_from.days_seconds) ||
      (request_from > time_to.days_seconds && request_to > time_to.days_seconds))
  end
end
