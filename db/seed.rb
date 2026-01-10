class Seed
  def call
    # Create dummy Employee
    employee = Employee.find_or_new(
      first_name: 'first_name', last_name: 'last_name', description: 'description',
      email: "ok1@ok.com", phone: '123123123', role: 1
    )
    employee.password = '12345'
    unless employee.persisted?
      employee.save
      Rubee::Logger.debug object: employee, message: 'Employee created'
    end
    # Create dummy Company
    address = Address.find_or_new(city: 'city', country: 'country', postal: 'postal', region: 'region',
                           street_line1: 'street_line1', street_line2: 'street_line2', lt: 1.0, ln: 1.0)
    unless address.persisted?
      address.save
      Rubee::Logger.debug object: address, message: 'Address created'
    end

    company = Company.find_or_new(
      name: 'name', email: "ok3@ok.com",
      website: 'https://ok.com', phone: '+123112123', description: 'description',
      address_id: address.id
    )
    unless company.persisted?
      company.save
      Rubee::Logger.debug object: company, message: 'Company created'
      company.add_employees(employee)
    end
    # Create dummy Window
    window = Window.find_or_new(
      start_time: Time.new(2020, 1, 1, 9, 0, 0),
      end_time: Time.new(2020, 1, 1, 18, 0, 0),
      break_from: Time.new(2020, 1, 1, 12, 0, 0),
      break_to: Time.new(2020, 1, 1, 13, 0, 0),
      effective_date: Date.today - 1,
    )
    unless window.persisted?
      window.weekends = [6, 7]
      window.save
      Rubee::Logger.debug object: window, message: 'Window created'
      # add window to employee
      employee.add_windows(window)
      Rubee::Logger.info message: 'Window added to employee'
    end
    # Create dummy Services
    service1 = Service.find_or_new(
      name: 'Man haircut', price: 70.0, description: 'very nice man haircut', employee_id: employee.id, duration: 45
    )
    unless service1.persisted?
      service1.save
      Rubee::Logger.debug object: service1, message: 'Service1 created'
    end

    service2 = Service.find_or_new(
      name: 'Woman haircut', price: 100.0, description: 'very nice woman haircut',
      employee_id: employee.id, duration: 60
    )
    unless service2.persisted?
      service2.save
      Rubee::Logger.debug object: service2, message: 'Service2 created'
    end
    # Create dummy Client1
    client = Client.find_or_new(
      first_name: 'John', last_name: 'Doe',
                            email: "ok#{Time.now.to_i}i@ok.com", phone: 'phone',
                            password_digest: 'password_digest'
    )
    client.password = 'password_digest'
    unless client.persisted?
      client.save
      Rubee::Logger.debug object: client, message: 'Client created'
      company.add_clients(client)
    end
    # Create dummy Client2
    client2 = Client.find_or_new(
      first_name: 'Marry', last_name: 'Cluth',
                            email: "ok#{Time.now.to_i}o@ok.com", phone: 'phone',
                            password_digest: 'password_digest'
    )
    client2.password = 'password_digest'
    unless client2.persisted?
      client2.save
      Rubee::Logger.debug object: client2, message: 'Client2 created'
      company.add_clients(client2)
    end

    Rubee::Logger.info message: 'Seeds completed'
  rescue StandardError => e
    Rubee::Logger.error message: e.message
  end
end
