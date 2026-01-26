require_relative '../test_helper'

describe 'Employee API' do
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
  let(:client) do
    client = Client.new(first_name: 'first_name', last_name: 'last_name',
               email: "ok#{current_time_ms}@ok.com", phone: 'phone',
               password_digest: 'password_digest')
    client.password = 'password_digest'
    client.save
    client
  end
  let!(:service) do
    Service.create(
      name: 'name',
      description: 'description',
      duration: 30,
      price: 100.0,
      employee_id: auth_employee.id,
    )
  end
  let(:window) do
    Window.create(
      start_time: Time.new(2020, 1, 1, 9, 0, 0),
      end_time: Time.new(2020, 1, 1, 18, 0, 0),
      break_from: Time.new(2020, 1, 1, 12, 0, 0),
      break_to: Time.new(2020, 1, 1, 13, 0, 0),
      effective_date: Date.today,
      weekends: [6, 0]
    )
  end

  before do
    company.add_employees(auth_employee)
    company.add_clients(client)
    auth_employee.add_windows(window)
    auth_params = { email: auth_employee.email, password: auth_employee.password }
    post('/api/employees/login', auth_params)
    jwt = last_response.cookies['jwt'].value[0]
    set_cookie "jwt=#{jwt}"
  end

  describe 'POST /api/time_slots' do
    context 'when valid params are passed' do
      let(:valid_params) do
        {
          "id": 16,
          "start_time": Time.today.closest_future_working_day.at(10, 0, 0).strftime("%Y-%m-%d %H:%M:%S %z"),
          "end_time": Time.today.closest_future_working_day.at(10, 30, 0).strftime("%Y-%m-%d %H:%M:%S %z"),
          "day": Time.today.closest_future_working_day.strftime("%Y-%m-%d"),
          "employee_id": auth_employee.id,
          "client_id": client.id,
          "company_id": company.id,
          "service_id": service.id,
          "state": "scheduled",
          "price": "100.0",
        }
      end

      it 'should return 200' do
        post('/api/time_slots', valid_params)

        assert_equal(201, last_response.status)
      end

      it 'should create a new time slot' do
        assert_difference(-> { TimeSlot.count }, 1) { post('/api/time_slots', valid_params) }
      end
    end

    context 'when invalid params are passed' do
      let(:invalid_params) do
        {
          "id": 16,
          "start_time": "2026-01-15 10:00:00 -0500",
          "end_time": "2026-01-15 10:45:00 -0500",
          "day": "2026-01-15",
          "employee_id": auth_employee.id,
          "client_id": nil,
          "company_id": company.id,
          "service_id": service.id,
          "state": "scheduled",
          "price": "100.0",
        }
      end

      it 'should return 422' do
        post('/api/time_slots', invalid_params)

        assert_equal(422, last_response.status)
      end
    end
  end

  describe 'PUT /api/time_slots/{id}' do
    let!(:time_slot) do
      TimeSlot.create(
        start_time: Time.today.closest_future_working_day.at(10, 0, 0),
        end_time: Time.today.closest_future_working_day.at(10, 30, 0),
        state: 0,
        client_id: client.id,
        employee_id: auth_employee.id, company_id: company.id, day: Time.today.closest_future_working_day.to_date
      )
    end

    context 'when valid params are passed' do
      let(:valid_params) do
        {
          "start_time": Time.tomorrow.closest_future_working_day.at(10, 0, 0).strftime("%Y-%m-%d %H:%M:%S %z"),
          "end_time": Time.tomorrow.closest_future_working_day.at(10, 30, 0).strftime("%Y-%m-%d %H:%M:%S %z"),
          "day": Time.tomorrow.closest_future_working_day.strftime("%Y-%m-%d"),
          "employee_id": auth_employee.id,
          "client_id": client.id,
          "company_id": company.id,
          "service_id": service.id,
          "state": "scheduled",
          "price": "100.0",
        }
      end

      it 'should return 200' do
        put("/api/time_slots/#{time_slot.id}", valid_params)

        assert_equal(200, last_response.status)
      end
    end

    context 'when start_time is 3 days behind' do
      let(:invalid_params) do
        {
          "start_time": Time.now.subtract_days(3).strftime("%Y-%m-%d %H:%M:%S %z"),
          "end_time": Time.now.subtract_days(3).strftime("%Y-%m-%d %H:%M:%S %z"),
          "day": Time.now.strftime("%Y-%m-%d"),
          "employee_id": auth_employee.id,
          "client_id": client.id,
          "company_id": company.id,
          "service_id": service.id,
          "state": "scheduled",
          "price": "100.0",
        }
      end

      it 'should return 422' do
        put("/api/time_slots/#{time_slot.id}", invalid_params)

        assert_equal(422, last_response.status)
      end
    end

    context 'when state is not scheduled' do
      let(:invalid_params) do
        {
          "start_time": Time.tomorrow.closest_future_working_day.at(10, 0, 0).strftime("%Y-%m-%d %H:%M:%S %z"),
          "end_time": Time.tomorrow.closest_future_working_day.at(10, 30, 0).strftime("%Y-%m-%d %H:%M:%S %z"),
          "day": Time.tomorrow.closest_future_working_day.strftime("%Y-%m-%d"),
          "employee_id": auth_employee.id,
          "client_id": client.id,
          "company_id": company.id,
          "service_id": service.id,
          "state": "cancelled",
          "price": "100.0",
        }
      end

      it 'should return 422' do
        put("/api/time_slots/#{time_slot.id}", invalid_params)

        assert_equal(422, last_response.status)
      end
    end

    describe 'DELETE /api/time_slots/{id}' do
      let!(:time_slot) do
        TimeSlot.create(
          start_time: Time.today.closest_future_working_day.at(10, 0, 0),
          end_time: Time.today.closest_future_working_day.at(10, 30, 0),
          state: 0,
          client_id: client.id,
          employee_id: auth_employee.id, company_id: company.id, day: Time.today.closest_future_working_day.to_date
        )
      end

      it 'should return 200' do
        delete("/api/time_slots/#{time_slot.id}")

        assert_equal(200, last_response.status)
      end

      context 'when status is cancelled' do
        let!(:time_slot) do
          TimeSlot.create(
            start_time: Time.today.closest_future_working_day.at(10, 0, 0),
            end_time: Time.today.closest_future_working_day.at(10, 30, 0),
            state: TimeSlot.state('cancelled'),
            client_id: client.id,
            employee_id: auth_employee.id, company_id: company.id, day: Time.today.closest_future_working_day.to_date
          )
        end

        it 'should return 500' do
          delete("/api/time_slots/#{time_slot.id}")

          assert_equal(500, last_response.status)
        end
      end
    end
  end
end
