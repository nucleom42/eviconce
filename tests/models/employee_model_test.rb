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

  describe 'methods' do
    before { Window.delete_all }

    let!(:employee) do
      employee = Employee.new(
        first_name: 'first_name', last_name: 'last_name', description: 'description',
        email: "ok#{current_time_ms}@ok.com", phone: '123123123', password_digest: 'password_digest', role: 1
      )
      employee.password = 'password_digest'
      employee.save
      employee
    end
    let(:window_one) do
      Window.create(
        start_time: Time.new(2020, 1, 1, 9, 0, 0),
        end_time: Time.new(2020, 1, 1, 18, 0, 0),
        break_from: Time.new(2020, 1, 1, 12, 0, 0),
        break_to: Time.new(2020, 1, 1, 13, 0, 0),
        effective_date: Date.today - 1,
        weekends: [6, 7]
      )
    end
    let(:window_two) do
      Window.create(
        start_time: Time.new(2020, 1, 1, 9, 0, 0),
        end_time: Time.new(2020, 1, 1, 18, 0, 0),
        break_from: Time.new(2020, 1, 1, 12, 0, 0),
        break_to: Time.new(2020, 1, 1, 13, 0, 0),
        effective_date: Date.today,
        weekends: [6, 7]
      )
    end
    let(:company) do
      Company.create(name: 'name', email: "ok#{current_time_ms}@ok.com", website: 'https://ok.com',
                                phone: '+123112123', description: 'description')
    end

    describe '#current_window' do
      describe 'when there is only one window' do
        it 'should return this window' do
          employee.add_windows(window_one)

          _(employee.current_window.id).must_equal(window_one.id)
        end
      end

      describe 'when  there is more than one window' do
        it 'should return latest window by effective_date' do
          employee.add_windows(window_one, window_two)

          _(employee.current_window.id).must_equal(window_two.id)
        end
      end
    end

    describe '#time_slots' do
      before { TimeSlot.destroy_all }
      after { TimeSlot.destroy_all }
      let(:time_slot) do
        TimeSlot.create(start_time: Time.tomorrow, end_time: (Time.tomorrow + 60), state: 0,
                                           employee_id: employee.id, company_id: company.id, day: Date.today + 1)
      end
      let(:next_time_slot) do
        TimeSlot.create(start_time: Time.tomorrow.end_of_day - 1000, end_time: (Time.tomorrow.end_of_day - 500), state: 0,
                                           employee_id: employee.id, company_id: company.id, day: Date.today + 1)
      end
      describe 'whenn there are time slots' do
        it 'should bring them' do
          TimeSlot.destroy_all
          time_slot
          next_time_slot
          _(employee.time_slots(Date.today + 1).map(&:id).sort).must_equal([time_slot.id, next_time_slot.id].sort)
        end
      end
    end

    describe '#available?' do
      describe 'when window is available' do
        before { employee.add_windows(window_one) }

        describe 'when there are no time slots' do
          it 'should return true' do
            _(employee.available?(Time.new(2020, 1, 1, 10, 0, 0)..Time.new(2020, 1, 1, 11, 0, 0))).must_equal(true)
          end
        end

        describe 'when there are time slot crossing but not canceled' do
          let!(:crossing_cancelled_time_slot) do
            TimeSlot.create(
              start_time: Time.today.at(14, 0, 0), end_time: Time.today.at(15, 0, 0), state: 2,
              employee_id: employee.id, company_id: company.id, day: Date.today
            )
          end
          it 'should return true' do
            _(employee.available?(Time.today.at(14, 0, 0)..Time.today.at(15, 0, 0))).must_equal(true)
          end
        end

        describe 'when there are crosing time slots' do
          let!(:crossing_time_slot) do
            TimeSlot.create(
              start_time: Time.now, end_time: (Time.now + 60), state: 0,
              employee_id: employee.id, company_id: company.id, day: Date.today
            )
          end
          it 'should return false' do
            _(employee.available?((Time.now - 10)..(Time.now + 50))).must_equal(false)
          end
        end

        describe 'when requested time overrides break hours' do
          it 'should return false' do
            _(employee.available?(Time.new(2020, 1, 1, 12, 0, 0)..Time.new(2020, 1, 1, 13, 0, 0))).must_equal(false)
          end
        end

        describe 'when requested time is outside work hours' do
          it 'should return false' do
            _(employee.available?(Time.new(2020, 1, 1, 19, 0, 0)..Time.new(2020, 1, 1, 20, 0, 0))).must_equal(false)
          end
        end

        describe 'when requested time is on weekends' do
          it 'should return false' do
            _(employee.available?(Time.new(2020, 1, 3, 10, 0, 0)..Time.new(2020, 1, 3, 11, 0, 0))).must_equal(false)
          end
        end
      end

      describe 'when window end date is set in the past' do
        before do
          employee.add_windows(window_one)

          window_one.update(effective_date: Date.today - 2, end_date: Date.today - 1)
        end

        it 'should return false' do
          _(employee.available?(Time.now..(Time.now + 60))).must_equal(false)
        end
      end

      describe 'when window is not available' do
        it 'should return false' do
          _(employee.available?(Time.now..(Time.now + 60))).must_equal(false)
        end
      end
    end
  end
end
