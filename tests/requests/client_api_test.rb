require_relative '../test_helper'

describe 'Client API' do
  include Rack::Test::Methods

  def app
    Rubee::Application.instance
  end

  describe 'GET /api/clients' do
    describe 'valid params' do
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
      let!(:clients_one) do
        cl1 = Client.new(
          first_name: 'name', email: "ok#{current_time_ms}7@ok.com",
          phone: '+123112123', last_name: 'description'
        )
        cl1.password = '123456'
        cl1.save
        cl1
      end
      let!(:clients_two) do
        cl2 = Client.new(
          first_name: 'name', email: "ok#{current_time_ms}8@ok.com",
          phone: '+123112123', last_name: 'description'
        )
        cl2.password = '123456'
        cl2.save
        cl2
      end
      let!(:clients) do
        [clients_one, clients_two]
      end

      before do
        company.add_employees(auth_employee)
        company.add_clients(clients_one, clients_two)
        auth_params = { email: auth_employee.email, password: auth_employee.password }
        post('/api/employees/login', auth_params)
        jwt = last_response.cookies['jwt'].value[0]

        header 'Cookie', "jwt=#{jwt}"
      end

      it 'should return 200' do
        get("/api/clients")

        assert_equal(200, last_response.status)
      end

      it 'should return clients' do
        get("/api/clients")

        assert_equal(clients.map(&:id).sort, JSON.parse(last_response.body).map { |c| c['id'] }.sort)
      end
    end
  end
end

