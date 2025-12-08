require_relative '../test_helper'

describe 'Service model' do
  after do
    Service.destroy_all
    Employee.destroy_all
  end
  describe '.save' do
    describe 'when valid' do
      it 'should be valid' do
        employee = Employee.new(
          first_name: 'first_name', last_name: 'last_name', description: 'description',
          email: 'ok@ok.com', phone: '123123123', password_digest: 'password_digest', role: 1
        )
        employee.password = 'password_digest'
        employee.save
        service = Service.new(name: 'name', price: 1.0, description: 'description', employee_id: employee.id,
duration: 45)
        _(service.valid?).must_equal(true)
      end

      it 'should save' do
        employee = Employee.new(
          first_name: 'first_name', last_name: 'last_name', description: 'description',
          email: 'ok@ok.com', phone: '123123123', password_digest: 'password_digest', role: 1
        )
        employee.password = 'password_digest'
        employee.save
        service = Service.new(name: 'name', price: 1.0, description: 'description', employee_id: employee.id,
duration: 45)
        _(service.save).must_equal(true)
      end
    end

    describe 'when invalid' do
      it 'should raise error' do
        employee = Employee.new(
          first_name: 'first_name', last_name: 'last_name', description: 'description',
          email: 'ok@ok.com', phone: '123123123', password_digest: 'password_digest', role: 1
        )
        employee.password = 'password_digest'
        employee.save
        service = Service.new(name: 'name', price: 1, description: 'description', employee_id: employee.id,
duration: 45)
        _(raise_error { service.save }.is_a?(Rubee::Validatable::Error)).must_equal(true)
      end

      it 'should be invalid' do
        employee = Employee.new(
          first_name: 'first_name', last_name: 'last_name', description: 'description',
          email: 'ok@ok.com', phone: '123123123', password_digest: 'password_digest', role: 1
        )
        employee.password = 'password_digest'
        employee.save
        service = Service.new(name: 'name', price: 1, description: 'description', employee_id: employee.id,
duration: 45)
        _(service.valid?).must_equal(false)
      end
    end

    describe 'holds employee' do
      it 'should bring associated employee' do
        employee = Employee.new(
          first_name: 'first_name', last_name: 'last_name', description: 'description',
          email: 'ok@ok.com', phone: '123123123', password_digest: 'password_digest', role: 1
        )
        employee.password = 'password_digest'
        employee.save
        service = Service.new(name: 'name', price: 1.0, description: 'description', employee_id: employee.id,
duration: 45)
        service.save
        _(service.employee.id).must_equal(employee.id)
      end
    end
  end
end
