require_relative '../test_helper'
using ChargedString

describe 'Company model' do
  after do
    CompanyClient.destroy_all cascade: true
    CompanyEmployee.destroy_all cascade: true
    Company.destroy_all
    Address.destroy_all
    Employee.destroy_all
  end

  describe '.save' do
    describe 'when valid' do
      it 'should be valid' do
        company = Company.new(
          name: 'name', email: 'ok@ok.com', website: 'https://ok.com', phone: '+123112123', description: 'description'
        )
        _(company.valid?).must_equal(true)
      end

      it 'should save' do
        company = Company.new(
          name: 'name', email: 'ok@ok.com', website: 'https://ok.com', phone: '+123112123', description: 'description'
        )
        company.save
        _(company.persisted?).must_equal(true)
      end

      it 'should be valid without website' do
        company = Company.new(
          name: 'name', email: 'ok@ok.com', phone: '+123112123', description: 'description'
        )
        _(company.valid?).must_equal(true)
      end
    end

    describe 'when invalid' do
      it 'should be invalid' do
        company = Company.new(
          name: 'name', email: 'ok@ok.com', website: 'website', phone: 'phone', description: 'description'
        )
        _(company.valid?).must_equal(false)
      end

      it 'should raise error' do
        company = Company.new(
          name: 'name', email: 'email', website: 'website', phone: 'phone', description: 'description'
        )
        _(raise_error { company.save }.is_a?(Rubee::Validatable::Error)).must_equal(true)
      end
    end

    describe 'holds address' do
      it 'should save assiciated address' do
        address = Address.new(city: 'city', country: 'country', postal: 'postal', region: 'region',
                           street_line1: 'street_line1', street_line2: 'street_line2', lt: 1.0, ln: 1.0)
        address.save
        company = Company.new(
          name: 'name', email: 'ok@ok.com', website: 'https://ok.com', phone: '+123112123', description: 'description',
          address_id: address.id
        )
        company.save
        _(company.persisted?).must_equal(true)
        _(company.address.id).must_equal(address.id)
      end
    end

    describe 'owns_many employees' do
      it 'should add employees' do
        company = Company.create(
          name: 'name', email: 'ok@ok.com', website: 'https://ok.com', phone: '+123112123', description: 'description'
        )
        employee = Employee.new(
          first_name: 'first_name', last_name: 'last_name', description: 'description',
          email: 'ok@ok.com', phone: '123123123', password_digest: 'password_digest', role: 1
        )
        employee.password = 'password_digest'
        employee.save
        assert_difference(-> { company.employees.count }, 1) do
          company.add_employees(employee)
        end
      end
    end

    describe 'owns many clients' do
      it 'should add clients' do
        company = Company.create(
          name: 'name', email: 'ok@ok.com', website: 'https://ok.com', phone: '+123112123', description: 'description'
        )
        client = Client.new(first_name: 'first_name', last_name: 'last_name', email: 'ok@ok.com', phone: 'phone',
                            password_digest: 'password_digest')
        client.password = 'password_digest'
        client.save
        assert_difference(-> { company.clients.count }, 1) do
          company.add_clients(client)
        end
        _(company.clients.count).must_equal(1)
      end
    end
  end
end
