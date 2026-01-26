require_relative '../test_helper'

describe 'Window API' do
  include Rack::Test::Methods

  def app
    Rubee::Application.instance
  end

  let!(:auth_employee) do
    employee = Employee.new(
      first_name: 'Hren',
      last_name: 'Hrenon',
      email: "L4qyWi2i123#{current_time_ms}@example.com",
      password_digest: '123456',
      description: 'nail specialist',
      phone: '1234567890',
      role: 1
    )
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

  let(:client) do
    client = Client.new(
      first_name: 'first_name',
      last_name: 'last_name',
      email: "ok#{current_time_ms}@ok.com",
      phone: 'phone',
      password_digest: 'password_digest'
    )
    client.password = 'password_digest'
    client.save
    client
  end

  before do
    company.add_employees(auth_employee)
    company.add_clients(client)
    auth_params = { email: auth_employee.email, password: auth_employee.password }
    post('/api/employees/login', auth_params)
    jwt = last_response.cookies['jwt'].value[0]
    set_cookie "jwt=#{jwt}"
  end

  describe 'POST /api/windows/upsert' do
    context 'when params are invalid' do
      let(:window_invalid_params) do
        {
          "id": 16,
          "start_time": "2026-01-15 10:50:00 -0500",
          "end_time": "2026-01-15 10:45:00 -0500",
          "break_from": "2026-01-15 12:45:00 -0500",
          "break_to": "2026-01-15 13:45:00 -0500",
          "effective_date": "2026-01-15",
          "weekends": [6, 0],
          "employee_id": auth_employee.id,
        }
      end

      it 'should return 422' do
        post('/api/windows/upsert', window_invalid_params)

        assert_equal(422, last_response.status)
      end
    end

    context 'when params are valid' do
      let(:valid_params) do
        {
          "id": 16,
          "start_time": "2026-01-15 10:30:00 -0500",
          "end_time": "2026-01-15 10:45:00 -0500",
          "break_from": "2026-01-15 12:45:00 -0500",
          "break_to": "2026-01-15 13:45:00 -0500",
          "effective_date": Time.today.closest_future_working_day.to_date,
          "weekends": [6, 0],
          "employee_id": auth_employee.id,
        }
      end

      context 'when there is no window yet' do
        it 'should return 201' do
          Window.dataset.delete
          post('/api/windows/upsert', valid_params)

          assert_equal(201, last_response.status)
        end
      end

      context 'when there is window with no time slots' do
        it 'should return 200' do
          TimeSlot.dataset.delete
          window
          auth_employee.add_windows(window)
          assert_difference(-> { Window.count }, 0) { post('/api/windows/upsert', valid_params.merge(id: window.id)) }

          assert_equal(200, last_response.status)
        end
      end

      describe 'when there is window with time slots in the future' do
        before do
          auth_employee.add_windows(window)
        end

        it 'should return 422' do
          TimeSlot.create(
            start_time: Time.tomorrow.closest_future_working_day.at(10, 0, 0),
            end_time: Time.tomorrow.closest_future_working_day.at(10, 30, 0),
            state: 0,
            client_id: client.id,
            employee_id: auth_employee.id,
            company_id: company.id,
            day: Time.tomorrow.closest_future_working_day.to_date,
          )
          post('/api/windows/upsert', valid_params.merge(id: window.id, effective_date: window.effective_date))

          assert_equal(422, last_response.status)
        end
      end

      describe 'when there is window with time slots in the past' do
        before do
          auth_employee.add_windows(window)
        end

        it 'should return 200' do
          TimeSlot.dataset.insert(
            start_time: Time.today.subtract_days(5).closest_future_working_day.at(10, 0, 0),
            end_time: Time.today.subtract_days(5).closest_future_working_day.at(10, 30, 0),
            state: 0,
            client_id: client.id,
            employee_id: auth_employee.id,
            company_id: company.id,
            day: Time.today.subtract_days(5).closest_future_working_day.to_date,
          )
          post('/api/windows/upsert', valid_params.merge(id: window.id))

          assert_equal(200, last_response.status)
        end
      end
    end
  end
end
