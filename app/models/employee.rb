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
  owns_many :windows, over: :employee_windows
  owns_many :time_slots

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

  def current_window
    @current_window ||= Window.dataset
      .join(:employee_windows, window_id: :id)
      .where(Sequel[:employee_windows][:employee_id] => id)
      .order(Sequel.desc(:effective_date))
      .limit(1).select_all(:windows).all
      .then { |hash| Window.serialize(hash) }.last
  end

  def time_slots(date)
    TimeSlot.where(employee_id: id, date: date)
  end

  def available?(range)
    request_from = days_seconds(range.begin)
    request_to = days_seconds(range.end)
    request_date = time_from.to_date

    start_sec = days_seconds(current_window.start_time)
    end_sec = days_seconds(current_window.end_time)
    break_from_sec = days_seconds(current_window.break_from)
    break_to_sec = days_seconds(current_window.break_to)

    within_work_hours = start_sec <= request_from && request_to <= end_sec
    within_break = break_from_sec <= request_from && request_to <= break_to_sec
    weekends = current_window.weekends.include?(request_date.wday + 1)

    booked = time_slots(date: time.to_date).any? do |time_slot|
      !time_slot.scheduled? &&
      days_seconds(time_slot.start_time) <= time_sec && time_sec < days_seconds(time_slot.end_time)
    end

    within_work_hours && !within_break && !weekends && !booked
  end

  def days_seconds(t)
    t.hour * 3600 + t.min * 60 + t.sec
  end

  def add_companies(*companies_args)
    companies_args.map { |company| CompanyEmployee.create(employee_id: id, company_id: company.id) }
  end

  def add_windows(*windows_args)
    windows_args.map { |window| EmployeeWindow.create(employee_id: id, window_id: window.id) }
  end

  class << self
    def digest(password)
      ::JWT.encode({ password: }, JWT_KEY, 'HS256')
    end
  end
end
