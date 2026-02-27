class Employee < Rubee::SequelObject
  JWT_KEY = "#{ENV['JWT_KEY']}#{name}" || 'secret'

  attr_accessor :id, :first_name, :last_name, :description,
    :email, :phone, :password_digest, :role, :created, :updated
  ROLES = { admin: 1, user: 0 }.freeze

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
  owns_many :services

  around :destroy, ->(m, &origianl_destroy) do
    Rubee::SequelObject::DB.transaction do
      # Progrmaticall cascade deletion
      Service.where(employee_id: m.id).map(&:destroy)
      TimeSlot.where(employee_id: m.id).map(&:destroy)
      CompanyEmployee.where(employee_id: m.id).map(&:destroy)
      EmployeeWindow.where(employee_id: m.id).map(&:destroy)

      origianl_destroy.call
    end
  end

  def frames(date, service)
    target_window = window_for_date(date)
    service_time = service.duration
    from_time = date.to_time.at(target_window.start_time.hour, target_window.start_time.min, 0)
    to_time = date.to_time.at(target_window.end_time.hour, target_window.end_time.min, 0)

    step_seconds = service_time * 60

    frames = []
    current = from_time

    while current + step_seconds <= to_time
      frames << (current...current + step_seconds)
      current += step_seconds
    end

    frames.filter_map do |frame|
      if available?(frame, nil, target_window, skip_invalidation: true)
        Frame.new(from: frame.begin, to: frame.end, service_id: service.id)
      end
    end
  end

  def password
    ::JWT.decode(password_digest, JWT_KEY, false)[0]['password']
  end

  def password=(value)
    self.password_digest = self.class.digest(value)
    valid?

    password_digest
  end

  def my_company
    companies&.first
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

  def upcoming_windows
    EmployeeWindow.dataset
      .join(:windows, id: :window_id)
      .where(Sequel[:employee_windows][:employee_id] => id)
      .where(Sequel[:windows][:effective_date] >= Date.today)
      .select_all(:windows).all.then { |hash| Window.serialize(hash) }
  end

  def current_window
    @current_window ||= today_or_past_window || earliest_future_window
  end

  def today_or_past_window
    Window.dataset
      .join(:employee_windows, window_id: :id)
      .where(Sequel[:employee_windows][:employee_id] => id)
      .where(Sequel[:windows][:effective_date] <= Date.today)
      .where(Sequel.|(
        Sequel.expr(Sequel[:windows][:end_date] => nil),
          Sequel[:windows][:end_date] > Date.today
      ))
      .order(Sequel.desc(:effective_date), Sequel.desc(:created))
      .limit(1)
      .select_all(:windows)
      .all
      .then { |hash| Window.serialize(hash) }.last
  end

  def earliest_future_window
    Window.dataset
      .join(:employee_windows, window_id: :id)
      .where(Sequel[:employee_windows][:employee_id] => id)
      .where(Sequel[:windows][:effective_date] > Date.today)
      .order(Sequel.asc(:effective_date), Sequel.asc(:created))
      .limit(1)
      .select_all(:windows)
      .all
      .then { |hash| Window.serialize(hash) }.last
  end

  # Cehck why it's not retunring window
  def window_for_date(date)
    Window.dataset
      .join(:employee_windows, window_id: :id)
      .where(Sequel[:employee_windows][:employee_id] => id)
      .where(Sequel[:windows][:effective_date] <= date)
      .where(Sequel.|(
        Sequel.expr(Sequel[:windows][:end_date] => nil),
          Sequel[:windows][:end_date] >= date
      ))
      .select_all(:windows)
      .all
      .then { |hash| Window.serialize(hash) }.last
  end

  def time_slots(date_or_range)
    TimeSlot.where(employee_id: id, day: date_or_range)
  end

  def available?(range, time_slot_id_exclude = nil, target_window = nil, **options)
    request_from = range.begin
    request_to = range.end
    request_date = range.begin.to_date
    target_window ||= current_window
    skip_invalidation = options[:skip_invalidation]
    unless target_window
      add_error(:availability, message: 'No windows') unless skip_invalidation
      return false
    end
    unless target_window.within_work_hours?(request_from, request_to)
      add_error(:availability, message: 'Outside work hours') unless skip_invalidation
      return false
    end
    if target_window.overlapping_break?(request_from, request_to)
      add_error(:availability, message: 'Within break hours') unless skip_invalidation
      return false
    end
    if target_window.weekends?(request_date)
      add_error(:availability, message: 'On weekends') unless skip_invalidation
      return false
    end
    overlapps_with_others = time_slots(request_date).any? do |ts|
      next if time_slot_id_exclude && ts.id == time_slot_id_exclude

      ts.overlapping?(request_date, request_from, request_to)
    end
    if overlapps_with_others
      add_error(:availability, message: 'Overlapping') unless skip_invalidation
      return false
    end

    true
  end

  def add_companies(*companies_args)
    if ROLES[role] == 'admin' && my_company
      add_error(:role, message: 'Admin can have only one company')
      return false
    end
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
