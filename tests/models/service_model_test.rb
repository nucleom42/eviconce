require_relative '../test_helper'

describe 'Service model' do
  describe '.save' do
    let!(:company) do
      company = Company.new(
        name: "name#{current_time_ms}", email: "ok#{current_time_ms}3@ok.com",
        website: 'https://ok.com', phone: '+123112123', description: 'description',
      )
      company.save
      company
    end
    describe 'when valid' do
      it 'should be valid' do
        employee = Employee.new(
          first_name: 'first_name', last_name: 'last_name', description: 'description',
          email: "ok#{current_time_ms}@ok.com", phone: '123123123',
          password_digest: 'password_digest', role: 1, company_id: company.id
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
          email: "ok#{current_time_ms}@ok.com", phone: '123123123',
          password_digest: 'password_digest', role: 1, company_id: company.id
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
          email: "ok#{current_time_ms}@ok.com", phone: '123123123',
          password_digest: 'password_digest', role: 1, company_id: company.id
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
          email: "ok#{current_time_ms}@ok.com", phone: '123123123',
          password_digest: 'password_digest', role: 1,
          company_id: company.id
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
          email: "ok#{current_time_ms}@ok.com", phone: '123123123',
          password_digest: 'password_digest', role: 1, company_id: company.id
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
