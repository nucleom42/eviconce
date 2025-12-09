class Employee < Rubee::SequelObject
  JWT_KEY = "#{ENV['JWT_KEY']}#{name}" || 'secret'
  attr_accessor :id, :first_name, :last_name, :description,
    :email, :phone, :password_digest, :role, :created, :updated

  validate do
    attribute(:first_name).required.type(String).condition(-> { first_name.length > 1 })
    attribute(:last_name).optional.type(String).condition(-> { last_name.length > 1 })
    attribute(:description).required.type(String).condition(-> { description.length > 5 })
    attribute(:email).required.type(String)
      .condition(-> {
                   email.match?(/\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i)
                 }, message: 'Invalid email format')
    attribute(:phone).required.type(String).condition(-> { phone.length > 5 })
    attribute(:password_digest).required.type(String)
      .condition(-> { @__encoded }, message: "Password must be encoded by using 'password=' method")
    attribute(:role).required.condition(-> { role.to_i&.between?(0, 1) })
  end

  owns_many :compannies, over: :company_employees

  def password
    ::JWT.decode(password_digest, JWT_KEY, false)[0]['password']
  end

  def password=(value)
    self.password_digest = self.class.digest(value)
    @__encoded = true unless value == password_digest
    valid?

    password_digest
  end

  def add_companies(*companies)
    companies.map { |company| CompanyEmployee.create(employee_id: id, company_id: company.id) }
  end

  class << self
    def digest(password)
      ::JWT.encode({ password: }, JWT_KEY, 'HS256')
    end
  end
end
