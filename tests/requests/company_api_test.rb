require_relative '../test_helper'

describe 'Company API' do
  include Rack::Test::Methods

  def app
    Rubee::Application.instance
  end

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

  describe 'GET /api/companies/{id}/dashboard' do
    describe 'employee is not authentificated' do
      it 'should return 401' do
        get("/api/companies/#{company.id}/dashboard")

        assert_equal(401, last_response.status)
      end
    end

    describe 'employee authentificated' do
      describe 'valid params' do
        it 'should return 200' do
          company.add_employees(auth_employee)
          valid_params = { email: auth_employee.email, password: auth_employee.password }
          post('/api/employees/login', valid_params)
          jwt = last_response.cookies['jwt'].value[0]

          header 'Cookie', "jwt=#{jwt}"
          get("/api/companies/#{company.id}/dashboard")

          assert_equal(200, last_response.status)
          assert_equal %w[company employees user], JSON.parse(last_response.body).keys.sort
        end
      end
      describe 'invalid params' do
      end
    end
  end
end
