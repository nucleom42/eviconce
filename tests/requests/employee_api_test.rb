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
        employee = Employee.new(first_name: 'Hren', last_name: 'Hrenon', email: "L4qyWi42342#{current_time_ms}@example.com",
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
end
