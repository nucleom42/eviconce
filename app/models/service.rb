class Service < Rubee::SequelObject
  attr_accessor :id, :name, :description, :price, :duration, :employee_id, :created, :updated

  validate_before_persist!
  validate do
    attribute(:name).required.type(String).condition(-> { name.length > 1 })
    attribute(:description).required.type(String).condition(-> { description.length > 5 })
    attribute(:price).required.type(Float).condition(-> { price >= 0.0 })
    attribute(:duration).required.type(Integer).condition(-> { duration >= 0 })
    attribute(:employee_id).required
  end

  holds :employee
end
