class Client < Rubee::SequelObject
  JWT_KEY = "#{ENV['JWT_KEY']}#{name}" || 'secret'
  attr_accessor :id, :first_name, :last_name, :email, :phone, :password_digest, :created, :updated, :address_id

  validate do
    attribute(:first_name).required.type(String).condition(-> { first_name.length > 2 })
    attribute(:last_name).optional.type(String).condition(-> { last_name.length > 2 })
    attribute(:email).optional.type(String)
      .condition(-> { email.match?(/\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/) }, message: 'invalid email')
    attribute(:phone).optional.type(String)
    attribute(:password_digest).required.type(String)
      .condition(
        -> { password_digest || !persisted? && @__encoded },
        message: "password should be set over 'password=' method"
      )
    attribute(:address_id).optional.type(Integer)
  end

  holds :address
  owns_many :companies, over: :company_clients

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

  def add_companies(*companies)
    companies.map { |company| CompanyClient.create(client_id: id, company_id: company.id) }
  end
end
