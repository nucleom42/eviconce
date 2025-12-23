require_relative '../test_helper'

describe 'Employee model' do
  describe '.save' do
    describe 'when valid' do
      it 'should be valid' do
        employee = Employee.new(
          first_name: 'first_name', last_name: 'last_name', description: 'description',
          email: "ok#{current_time_ms}@ok.com", phone: '123123123', password_digest: 'password_digest', role: 1
        )
        employee.password = 'password_digest'
        _(employee.valid?).must_equal(true)
      end

      it 'should save' do
        employee = Employee.new(
          first_name: 'first_name', last_name: 'last_name', description: 'description',
          email: "ok#{current_time_ms}@ok.com", phone: '123123123', password_digest: 'password_digest', role: 1
        )
        employee.password = 'password_digest'
        _(employee.save).must_equal(true)
      end
    end

    describe 'when invalid' do
      it 'should raise error' do
        _(
          raise_error do
            Employee.create(
              first_name: 'v', last_name: 'last_name', description: 'description',
              email: 'email', phone: 'phone', password_digest: 'password_digest', role: 1
            )
          end.is_a?(Rubee::Validatable::Error)
        ).must_equal(true)
      end
    end

    describe 'whenn passowd is not set over password= method' do
      it 'should not be valid' do
        employee = Employee.new(
          first_name: 'first_name', last_name: 'last_name', description: 'description',
          email: "ok#{current_time_ms}@ok.com", phone: '123123123', password_digest: 'password_digest', role: 1
        )
        _(employee.valid?).must_equal(false)
      end
    end
  end

  describe '#current_window' do
    describe 'when there is only one window' do
      it 'should return this window' do
        employee = Employee.new(
          first_name: 'first_name', last_name: 'last_name', description: 'description',
          email: "ok#{current_time_ms}@ok.com", phone: '123123123', password_digest: 'password_digest', role: 1
        )
        employee.password = 'password_digest'
        employee.save
        window = Window.new(
          start_time: Time.new(2020, 1, 1, 9, 0, 0),
          end_time: Time.new(2020, 1, 1, 18, 0, 0),
          break_from: Time.new(2020, 1, 1, 12, 0, 0),
          break_to: Time.new(2020, 1, 1, 13, 0, 0),
          effective_date: Date.today - 1,
          weekends: [6, 7]
        )
        window.save
        employee.add_windows(window)
        _(employee.current_window.id).must_equal(window.id)
      end
    end
    describe 'when  there is more than one window' do
      it 'should return latest window by effective_date' do
        employee = Employee.new(
          first_name: 'first_name', last_name: 'last_name', description: 'description',
          email: "ok#{current_time_ms}@ok.com", phone: '123123123', password_digest: 'password_digest', role: 1
        )
        employee.password = 'password_digest'
        employee.save
        window = Window.new(
          start_time: Time.new(2020, 1, 1, 9, 0, 0),
          end_time: Time.new(2020, 1, 1, 18, 0, 0),
          break_from: Time.new(2020, 1, 1, 12, 0, 0),
          break_to: Time.new(2020, 1, 1, 13, 0, 0),
          effective_date: Date.today - 1,
          weekends: [6, 7]
        )
        window.save
        window2 = Window.new(
          start_time: Time.new(2020, 1, 1, 9, 0, 0),
          end_time: Time.new(2020, 1, 1, 18, 0, 0),
          break_from: Time.new(2020, 1, 1, 12, 0, 0),
          break_to: Time.new(2020, 1, 1, 13, 0, 0),
          effective_date: Date.today,
          weekends: [6, 7]
        )
        window2.save
        employee.add_windows(window, window2)
        _(employee.current_window.id).must_equal(window2.id)
      end
    end
  end

  describe '#time_slots' do
    describe 'whenn there are time slots' do
      it 'should bring them' do
        employee = Employee.new(
          first_name: 'first_name', last_name: 'last_name', description: 'description',
          email: "ok#{current_time_ms}@ok.com", phone: '123123123', password_digest: 'password_digest', role: 1
        )
        employee.password = 'password_digest'
        employee.save
        window = Window.new(
          start_time: Time.new(2020, 1, 1, 9, 0, 0),
          end_time: Time.new(2020, 1, 1, 18, 0, 0),
          break_from: Time.new(2020, 1, 1, 12, 0, 0),
          break_to: Time.new(2020, 1, 1, 13, 0, 0),
          effective_date: Date.today - 1,
          weekends: [6, 7]
        )
        window.save
        employee.add_windows(window)
        company = Company.new(name: 'name', email: "ok#{current_time_ms}@ok.com", website: 'https://ok.com',
                              phone: '+123112123', description: 'description')
        company.save
        time_slot = TimeSlot.new(start_time: Time.now, end_time: (Time.now + 60), state: 0,
                                 employee_id: employee.id, company_id: company.id, day: Date.today)
        time_slot2 = TimeSlot.new(start_time: Time.now + 61, end_time: (Time.now + 121), state: 0,
                                 employee_id: employee.id, company_id: company.id, day: Date.today)
        time_slot.save
        time_slot2.save
        _(employee.time_slots(Date.today).map(&:id)).must_equal([time_slot.id, time_slot2.id])
      end
    end
  end
end
