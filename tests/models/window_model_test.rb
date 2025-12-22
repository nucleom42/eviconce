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
          effective_date: Date.today - 1,
          weekends: [6, 7]
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
          weekends: [6, 7]
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
          effective_date: Date.today - 1,
          weekends: [6, 7]
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
  end
end
