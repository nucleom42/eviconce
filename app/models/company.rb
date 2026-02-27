class Company < Rubee::SequelObject
  attr_accessor :id, :name, :email, :website, :phone, :description, :address_id, :created, :updated

  validate do
    attribute(:name).required('Назва компаніїобовязкова').type(String)
      .condition(-> { name.length > 1 }, message: 'Назва компанії повинна бути більша ніж 1 символ')
    attribute(:email).required('Email обовязковий').type(String)
      .condition(-> {
                   email.match?(/\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i)
                 }, message: 'Невірний формат email')
      .condition(-> { email_changed? && email_unique? }, message: 'Такий email вже використовується')
    attribute(:website).optional.type(String)
      .condition(-> {
        website.match?(%r{^(https?://)?([\da-z\.-]+)\.([a-z\.]{2,6})([/\w \.-]*)*/?$})
      }, message: 'Невірний формат сайту')
    attribute(:phone).optional.type(String)
    attribute(:description).required('Опис обовязковий').type(String)
      .condition(-> { description.length > 10 }, message: 'Опис повинен бути більш ніж 10 символів')
    attribute(:address_id).optional
  end

  holds :address
  owns_many :employees, over: :company_employees
  owns_many :clients, over: :company_clients
  owns_many :images, over: :company_images

  def add_employees(*employees)
    employees.map { |e| CompanyEmployee.create(employee_id: e.id, company_id: id) }
  end

  def logo
    images.where(type: Image::TYPES_MAP.key(:logo)).first
  end

  def add_clients(*clients)
    clients.map { |c| CompanyClient.create(client_id: c.id, company_id: id) }
  end

  def add_images(*images)
    images.map { |i| CompanyImage.create(image_id: i.id, company_id: id) }
  end

  def email_changed?
    return false if email.nil? && id.nil?
    return true if id.nil? || !email.nil?

    Company.find(id).email != email
  end

  def email_unique?
    ds = Company.dataset.where(email: email)
    ds = ds.exclude(id: id) if id

    !Rubee::SequelObject::DB.get(ds.exists)
  end
end
