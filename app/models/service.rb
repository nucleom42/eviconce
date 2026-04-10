class Service < Rubee::SequelObject
  attr_accessor :id,
    :name,
    :description,
    :price,
    :duration,
    :employee_id,
    :created,
    :updated

  validate do
    attribute(:name).required.type(String).condition(-> { name.length > 1 })
    attribute(:description).required.type(String).condition(-> { description.length > 5 })
    attribute(:price).required.type(Float).condition(-> { price >= 0.0 })
    attribute(:duration).required.type(Integer).condition(-> { duration >= 0 })
    attribute(:employee_id).required
  end

  holds :employee

  def days_available(from = Date.today, to = Date.today + 14)
    days = obtain_available(from, to)
    return [] if days.empty?

    until days.count >= 14
      from = days.last + 1
      to = from + (14 - days.count)
      days += obtain_available(from, to)
    end

    days.first(14)
  end

  def obtain_available(from, to)
    (from..to).to_a.select do |date|
      employee.frames(date, self).any?
    end
  end
end
