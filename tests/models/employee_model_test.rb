require_relative '../test_helper'

describe 'Employee model' do
  # after { Employee.destroy_all }
  describe '.save' do
    describe 'when valid' do
      it 'should be valid' do
        employee = Employee.new(
          first_name: 'first_name', last_name: 'last_name', description: 'description',
          email: 'ok@ok.com', phone: '123123123', password_digest: 'password_digest', role: 1
        )
        employee.password = 'password_digest'
        _(employee.valid?).must_equal(true)
      end

      it 'should save' do
        employee = Employee.new(
          first_name: 'first_name', last_name: 'last_name', description: 'description',
          email: 'ok@ok.com', phone: '123123123', password_digest: 'password_digest', role: 1
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
          email: 'ok@ok.com', phone: '123123123', password_digest: 'password_digest', role: 1
        )
        _(employee.valid?).must_equal(false)
      end
    end
  end
end
