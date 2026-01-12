require_relative '../test_helper'

describe 'TimeSlot model' do
  describe '.save' do
    describe 'when valid' do
      it 'should be valid' do
        window = Window.new(
          start_time: Time.new(2020, 1, 1, 9, 0, 0),
          end_time: Time.new(2020, 1, 1, 18, 0, 0),
          break_from: Time.new(2020, 1, 1, 12, 0, 0),
          break_to: Time.new(2020, 1, 1, 13, 0, 0),
          effective_date: Date.today - 1,
          weekends: [6, 0]
        )
        window.save
        address = Address.new(city: 'city', country: 'country', postal: 'postal', region: 'region',
                           street_line1: 'street_line1', street_line2: 'street_line2', lt: 1.0, ln: 1.0)
        address.save
        company = Company.new(
          name: 'name', email: "ok#{current_time_ms}@ok.com", website: 'https://ok.com',
          phone: '+123112123', description: 'description',\
          address_id: address.id
        )
        company.save
        client = Client.new(first_name: 'first_name', last_name: 'last_name',
                            email: "ok#{current_time_ms}@ok.com", phone: 'phone',
                            password_digest: 'password_digest')
        client.password = 'password_digest'
        client.save
        employee = Employee.new(
          first_name: 'first_name', last_name: 'last_name', description: 'description',
          email: "ok#{current_time_ms}@ok.com", phone: '123123123', password_digest: 'password_digest', role: 1
        )
        employee.password = 'password_digest'
        employee.save
        employee.add_windows(window)
        company.add_employees(employee)
        time_slot = TimeSlot.new(
          start_time: Time.today.closest_future_working_day.at(10, 0, 0),
          end_time: Time.today.closest_future_working_day.at(11, 0, 0),
          client_id: client.id,
          employee_id: employee.id, company_id: company.id,
          state: 0,
          day: Time.today.closest_future_working_day.to_date
        )
        _(time_slot.valid?).must_equal(true)
        _(time_slot.save).must_equal(true)
      end
    end

    describe 'when invalid' do
      it 'should be invalid' do
        address = Address.new(city: 'city', country: 'country', postal: 'postal', region: 'region',
                           street_line1: 'street_line1', street_line2: 'street_line2', lt: 1.0, ln: 1.0)
        address.save
        company = Company.new(
          name: 'name', email: "ok#{current_time_ms}@ok.com", website: 'https://ok.com',
          phone: '+123112123', description: 'description',\
          address_id: address.id
        )
        company.save
        client = Client.new(first_name: 'first_name', last_name: 'last_name',
                            email: "ok#{current_time_ms}@ok.com", phone: 'phone',
                            password_digest: 'password_digest')
        client.password = 'password_digest'
        client.save
        employee = Employee.new(
          first_name: 'first_name', last_name: 'last_name', description: 'description',
          email: "ok#{current_time_ms}@ok.com", phone: '123123123', password_digest: 'password_digest', role: 1
        )
        employee.password = 'password_digest'
        employee.save
        company.add_employees(employee)
        time_slot = TimeSlot.new(start_time: Time.now, end_time: (Time.now - 3600), client_id: client.id,
                                 employee_id: employee.id, company_id: company.id, state: 0, day: Date.today)
        _(time_slot.valid?).must_equal(false)
      end
    end
  end
end
