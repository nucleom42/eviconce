class Employee < Rubee::SequelObject
  JWT_KEY = "#{ENV['JWT_KEY']}#{name}" || 'secret'
  attr_accessor :id, :first_name, :last_name, :description,
    :email, :phone, :password_digest, :role, :created, :updated

  validate do
    attribute(:first_name).required('Ім\'я не може бути порожнім')
      .type(String).condition(-> { first_name.length > 1 }, 'Ім\'я повинно бути більше 1 символа')
    attribute(:last_name).optional.type(String)
      .condition(-> { last_name.length > 1 }, 'Прізвище повинно бути більше 1 символа')
    attribute(:description).required('Опис не може бути порожнім').type(String)
      .condition(-> { description.length > 5 }, 'Опис повинен бути більше 5 символів')
    attribute(:email).required('Email не може бути порожнім').type(String)
      .condition(-> {
                   email.match?(/\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i)
                 }, message: 'Invalid email format')
      .condition(-> { email_changed? && email_unique? }, 'Email повинен бути унікальним')
    attribute(:phone).required('Телефон не може бути порожнім').type(String)
      .condition(-> { phone.length > 5 }, 'Телефон повинен бути більше 5 символів')
    attribute(:password_digest).required('Пароль не може бути порожнім').type(String)
      .condition(
        -> { password_digest.match?(/\A[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\z/) },
        message: "Password must be encoded by using 'password=' method"
      )
    attribute(:role).required('Роль не може бути порожнім').type(Integer)
      .condition(-> { role.to_i&.between?(0, 1) }, 'Роль повинна бути адмін чи користувач')
  end

  owns_many :companies, over: :company_employees

  def password
    ::JWT.decode(password_digest, JWT_KEY, false)[0]['password']
  end

  def password=(value)
    self.password_digest = self.class.digest(value)
    valid?

    password_digest
  end

  def email_unique?
    ds = Employee.dataset.where(email: email)
    ds = ds.exclude(id: id) if id

    !Rubee::SequelObject::DB.get(ds.exists)
  end

  def email_changed?
    return false if email.nil? && id.nil?
    return true if id.nil? || !email.nil?

    Employee.find(id).email != email
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
