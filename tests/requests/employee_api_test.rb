require_relative '../test_helper'

describe 'Employee API' do
  include Rack::Test::Methods

  def app
    Rubee::Application.instance
  end

  describe 'POST /api/employees' do
    describe 'valid params' do
      it 'should create a new employee' do
        valid_params = { employee: { first_name: 'Hren', last_name: 'Hrenon',
                                     email: "L4qyW12928374#{current_time_ms}@example.com",
                                     password: '123456', description: 'nail specialist', phone: '1234567890',
                                     role: 1 } }
        assert_difference(-> { Employee.count }, 1) do
          post('/api/employees', valid_params)
        end

        assert_equal(201, last_response.status)
      end
    end

    describe 'invalid params' do
      it 'should not create a new employee' do
        invalid_params = { employee: { first_name: 'Hren', last_name: 'Hrenon', email: 'L4qyW@example.com',
                                       password: '123456', description: 'nail specialist', phone: '1234567890',
                                       role: -1 } }
        assert_difference(-> { Employee.count }, 0) do
          post('/api/employees', invalid_params)
        end

        assert_equal(422, last_response.status)
      end
    end
  end

  describe 'POST /api/employees/login' do
    describe 'valid params' do
      it 'authenticate employee' do
        employee = Employee.new(first_name: 'Hren', last_name: 'Hrenon',
                                email: "L4qyWi2i123#{current_time_ms}@example.com",
                                password_digest: '123456', description: 'nail specialist', phone: '1234567890',
                                role: 1)
        employee.password = '123456'
        employee.save
        valid_params = { email: employee.email, password: employee.password }
        post('/api/employees/login', valid_params)

        assert_equal(200, last_response.status)
      end
    end

    describe 'invalid params' do
      it 'should not authenticate employee' do
        invalid_params = { email: 'L4@example.com', password: 'wrong' }
        post('/api/employees/login', invalid_params)

        assert_equal(401, last_response.status)
      end
    end
  end

  describe 'POST /api/employees/logout' do
    describe 'valid params' do
      it 'should logout employee' do
        employee = Employee.new(first_name: 'Hren', last_name: 'Hrenon',
                                email: "L4qyWi42342#{current_time_ms}@example.com",
                                password_digest: '123456', description: 'nail specialist', phone: '1234567890',
                                role: 1)
        employee.password = '123456'
        employee.save
        valid_params = { email: employee.email, password: employee.password }
        post('/api/employees/login', valid_params)
        post('/api/employees/logout')

        assert_equal(200, last_response.status)
      end
    end
  end

  describe 'PSOT /api/employees/{id}/availability' do
    let!(:auth_employee) do
      employee = Employee.new(first_name: 'Hren', last_name: 'Hrenon',
                                  email: "L4qyWi2i123#{current_time_ms}@example.com",
                                  password_digest: '123456', description: 'nail specialist', phone: '1234567890',
                                  role: 1)
      employee.password = '123456'
      employee.save
      employee
    end
    let!(:company) do
      Company.create(
        name: 'name', email: "ok#{current_time_ms}5@ok.com", website: 'https://ok.com',
        phone: '+123112123', description: 'description'
      )
    end

    before do
      company.add_employees(auth_employee)
      auth_params = { email: auth_employee.email, password: auth_employee.password }
      post('/api/employees/login', auth_params)
      jwt = last_response.cookies['jwt'].value[0]

      header 'Cookie', "jwt=#{jwt}"
    end

    describe 'when there are windows and time slots' do
      let!(:client) do
        client = Client.new(first_name: 'first_name', last_name: 'last_name',
                   email: "ok#{current_time_ms}@ok.com", phone: 'phone',
                   password_digest: 'password_digest')
        client.password = 'password_digest'
        client.save
        client
      end
      let!(:window) do
        Window.create(
          start_time: Time.new(2020, 1, 1, 9, 0, 0),
          end_time: Time.new(2020, 1, 1, 18, 0, 0),
          break_from: Time.new(2020, 1, 1, 12, 0, 0),
          break_to: Time.new(2020, 1, 1, 13, 0, 0),
          effective_date: Date.today - 1,
          weekends: [6, 0]
        )
      end
      let!(:time_slot) do
        TimeSlot.create(
          start_time: Time.today.closest_future_working_day.at(10, 0, 0),
          end_time: Time.today.closest_future_working_day.at(10, 30, 0),
          state: 0,
          client_id: client.id,
          employee_id: auth_employee.id, company_id: company.id, day: Time.today.closest_future_working_day.to_date
        )
      end
      let!(:next_time_slot) do
        TimeSlot.create(
          start_time: Time.today.closest_future_working_day.at(11, 0, 0),
          end_time: Time.today.closest_future_working_day.at(11, 30, 0),
          state: 0,
          client_id: client.id,
          employee_id: auth_employee.id, company_id: company.id, day: Time.today.closest_future_working_day.to_date
        )
      end
      before do
        auth_employee.add_windows(window)
      end

      describe 'valid params' do
        it 'should return 200' do
          time_slot
          next_time_slot
          params = {
            from: Time.beginning_of_today.strftime("%Y-%m-%d"),
            to: Time.end_of_today.add_days(7).strftime("%Y-%m-%d"),
          }
          get("/api/employees/#{auth_employee.id}/availability", params)

          assert_equal(200, last_response.status)
        end
      end
    end
  end
end
