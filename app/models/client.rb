class Client < Rubee::SequelObject
  JWT_KEY = "#{ENV['JWT_KEY']}#{name}" || 'secret'

  attr_accessor :id,
    :first_name,
    :last_name,
    :email,
    :phone,
    :password_digest,
    :created,
    :updated,
    :address_id,
    :company_id

  validate do
    attribute(:first_name).required.type(String)
      .condition(-> { first_name.length > 2 }, message: 'Ім\'я повинно бути більше 2 символів')
    attribute(:last_name).optional.type(String)
      .condition(-> { last_name.length > 2 }, message: 'Прізвище повинно бути більше 2 символів')
    attribute(:email).optional.type(String)
      .condition(-> { email.match?(/\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/) }, message: 'Некоректний email')
    attribute(:phone).optional.type(String)
    attribute(:password_digest).required.type(String)
      .condition(
        -> { password_digest || !persisted? && @__encoded },
        message: "password should be set over 'password=' method"
      )
    attribute(:company_id).required.type(Integer)
    attribute(:address_id).optional.type(Integer)
  end

  holds :address
  holds :company

  around :destroy do |client, &origianl_destroy|
    Rubee::SequelObject::DB.transaction do
      client.address&.destroy
      origianl_destroy.call
    end
  end

  def password=(value)
    self.password_digest = ::JWT.encode({ password: value }, JWT_KEY, 'HS256')
    @__encoded = true unless value == password_digest
    valid?

    password_digest
  end

  def password
    ::JWT.decode(password_digest, JWT_KEY, false)[0]['password']
  end
end
