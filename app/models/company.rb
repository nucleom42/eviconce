class Company < Rubee::SequelObject
  attr_accessor :id, :name, :email, :website, :phone, :description, :address_id, :created, :updated

  validate_before_persist!
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
  owns_many :employees, over: :company_employees
  owns_many :clients, over: :company_clients

  def add_employees(*employees)
    employees.map { |e| CompanyEmployee.create(employee_id: e.id, company_id: id) }
  end

  def add_clients(*clients)
    clients.map { |c| CompanyClient.create(client_id: c.id, company_id: id) }
  end
end
