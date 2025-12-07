class Company < Rubee::SequelObject
  attr_accessor :id, :name, :email, :website, :phone, :description, :address_id, :created, :updated

  validate do
    attribute(:name).required.type(String).condition(-> { name.length > 1 })
    attribute(:email).required.type(String)
      .condition(-> {
                   email.match?(/\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i)
                 }, message: 'Invalid email format')
    attribute(:website).optional.type(String)
      .condition(-> {
        website.match?(%r{^(https?://)?([\da-z\.-]+)\.([a-z\.]{2,6})([/\w \.-]*)*/?$})
      }, message: 'Invalid website format')
    attribute(:phone).optional.type(String)
    attribute(:description).required.type(String).condition(-> { description.length > 10 })
    attribute(:address_id).optional
  end

  holds :address
end
