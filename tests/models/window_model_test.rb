require_relative '../test_helper'

describe 'Window model' do
  describe '.save' do
    describe 'when valid' do
      it 'should be valid' do
        window = Window.new(
          start_time: Time.new(2020, 1, 1, 9, 0, 0),
          end_time: Time.new(2020, 1, 1, 18, 0, 0),
          break_from: Time.new(2020, 1, 1, 12, 0, 0),
          break_to: Time.new(2020, 1, 1, 13, 0, 0),
          effective_date: Date.today,
          weekends: [6, 0]
        )
        _(window.valid?).must_equal(true)
      end
    end

    describe 'when invalid' do
      it 'should beinvalid' do
        window = Window.new(
          start_time: Time.new(2020, 1, 1, 10, 0, 0),
          end_time: Time.new(2020, 1, 1, 9, 0, 0),
          break_from: Time.new(2020, 1, 1, 12, 0, 0),
          break_to: Time.new(2020, 1, 1, 13, 0, 0),
          effective_date: Date.today,
          weekends: [6, 0]
        )
        _(window.valid?).must_equal(false)
      end
    end

    describe 'when effective date is in the past' do
      it 'should be invalid' do
        window = Window.new(
          start_time: Time.new(2020, 1, 1, 9, 0, 0),
          end_time: Time.new(2020, 1, 1, 18, 0, 0),
          break_from: Time.new(2020, 1, 1, 12, 0, 0),
          break_to: Time.new(2020, 1, 1, 13, 0, 0),
          effective_date: Date.today - 2,
          weekends: [6, 0]
        )
        _(window.valid?).must_equal(false)
      end
    end

    describe 'association employees' do
      it 'should bring the employees' do
        window = Window.new(
          start_time: Time.new(2020, 1, 1, 9, 0, 0),
          end_time: Time.new(2020, 1, 1, 18, 0, 0),
          break_from: Time.new(2020, 1, 1, 12, 0, 0),
          break_to: Time.new(2020, 1, 1, 13, 0, 0),
          effective_date: Date.today,
          weekends: [6, 0]
        )
        window.save
        employee = Employee.new(
          first_name: 'first_name', last_name: 'last_name', description: 'description',
          email: "ok#{current_time_ms}@ok.com", phone: '123123123', password_digest: 'password_digest', role: 1
        )
        employee.password = 'password_digest'
        employee.save
        window.add_employees(employee)
        _(window.employees.any? { |e| e.id == employee.id }).must_equal(true)
      end
    end

    describe 'methods' do
      before { Window.delete_all }
      let!(:window) do
        Window.create(
          start_time: Time.new(2020, 1, 1, 9, 0, 0),
          end_time: Time.new(2020, 1, 1, 18, 0, 0),
          break_from: Time.new(2020, 1, 1, 12, 0, 0),
          break_to: Time.new(2020, 1, 1, 13, 0, 0),
          effective_date: Date.today,
          weekends: [6, 0]
        )
      end

      let!(:employee) do
        employee = Employee.new(
          first_name: 'first_name', last_name: 'last_name', description: 'description',
          email: "ok#{current_time_ms}@ok.com", phone: '123123123', password_digest: 'password_digest', role: 1
        )
        employee.password = 'password_digest'
        employee.save
        employee
      end

      describe '#within_work_hours?' do
        describe 'when agrs are within work hours' do
          it 'should return true' do
            _(window.within_work_hours?(window.start_time + 3600, window.start_time + 7200)).must_equal(true)
          end
        end

        describe 'when args are not within work hours' do
          it 'should return false' do
            # When exceeds end_time
            _(window.within_work_hours?(window.start_time + 3600, window.end_time + 10800)).must_equal(false)
            # When less than start_time
            _(window.within_work_hours?(window.start_time - 3600, window.start_time + 7200)).must_equal(false)
          end
        end
      end

      describe '#overlapping_break?' do
        describe 'when args are overlapping break hours' do
          describe 'when range is within break time' do
            it 'should return true' do
              _(window.overlapping_break?(window.break_from + 120, window.break_to - 120)).must_equal(true)
            end
          end

          describe 'when first arg overlaps break time' do
            it 'should return true' do
              _(window.overlapping_break?(window.break_from + 120, window.break_to + 120)).must_equal(true)
            end
          end

          describe 'when second arg overlaps break time' do
            it 'should return true' do
              _(window.overlapping_break?(window.break_from - 120, window.break_to - 120)).must_equal(true)
            end
          end

          describe 'when range includes break time' do
            it 'should return true' do
              _(window.overlapping_break?(window.break_from - 120, window.break_to + 120)).must_equal(true)
            end
          end
        end

        describe 'when args are not overlapping break hours' do
          describe 'When both args are before break time' do
            it 'should return false' do
              _(window.overlapping_break?(window.break_from - 240, window.break_from - 120)).must_equal(false)
            end
          end

          describe 'When both args are after break time' do
            it 'should return false' do
              _(window.overlapping_break?(window.break_to + 120, window.break_to + 240)).must_equal(false)
            end
          end
        end
      end
      describe '#weekends?' do
        describe 'when arg falls on weekends' do
          it 'should return true' do
            _(window.weekends?(Date.new(2020, 1, 4))).must_equal(true)
          end
        end

        describe 'when arg does not fall on weekends' do
          it 'should return false' do
            _(window.weekends?(Date.new(2020, 1, 1))).must_equal(false)
          end
        end
      end
    end
  end
end
