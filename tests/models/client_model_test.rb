require_relative '../test_helper'

describe 'Client model' do
  after do
    CompanyClient.destroy_all cascade: true
    Client.destroy_all
    Address.destroy_all
  end
  describe '.save' do
    describe 'when valid' do
      it 'should be valid' do
        client = Client.new(first_name: 'first_name', last_name: 'last_name', email: 'ok@ok.com', phone: 'phone',
                            password_digest: 'password_digest')
        client.password = 'password_digest'
        _(client.valid?).must_equal(true)
      end

      it 'should save' do
        client = Client.new(first_name: 'first_name', last_name: 'last_name', email: 'ok@ok.com', phone: 'phone',
                            password_digest: 'password_digest')
        client.password = 'password_digest'
        _(client.save).must_equal(true)
      end
    end

    describe 'when invalid' do
      it 'should be invalid' do
        client = Client.new(first_name: 'v', last_name: 'last_name', email: 'email', phone: 'phone',
                            password_digest: 'password_digest')
        _(client.valid?).must_equal(false)
      end

      it 'should raise error' do
        _(
          raise_error do
            Client.create(first_name: 'v', last_name: 'last_name', email: 'email', phone: 'phone',
                       password_digest: 'password_digest')
          end
        ).is_a?(Rubee::Validatable::Error)
      end
    end

    describe 'whenn passowd is not set over password= method' do
      it 'should not be valid' do
        client = Client.new(first_name: 'first_name', last_name: 'last_name', email: 'email', phone: 'phone',
                            password_digest: 'password_digest')
        _(client.valid?).must_equal(false)
      end
    end

    describe 'address association' do
      it 'should bring the address' do
        address = Address.new(city: 'city', country: 'country', postal: 'postal', region: 'region',
                           street_line1: 'street_line1', street_line2: 'street_line2', lt: 1.0, ln: 1.0)
        address.save
        client = Client.new(first_name: 'first_name', last_name: 'last_name', email: 'ok@ok.com', phone: 'phone',
                            password_digest: 'password_digest', address_id: address.id)
        client.password = 'password_digest'
        client.save
        _(client.address.id).must_equal(address.id)
      end
    end

    describe 'owns many companies' do
      it 'should add companies' do
        client = Client.new(first_name: 'first_name', last_name: 'last_name', email: 'ok@ok.com', phone: 'phone',
                               password_digest: 'password_digest')
        client.password = 'password_digest'
        client.save
        company = Company.create(
          name: 'name', email: 'ok@ok.com', website: 'https://ok.com', phone: '+123112123', description: 'description'
        )
        assert_difference(-> { client.companies.count }, 1) do
          client.add_companies(company)
        end
        _(client.companies.count).must_equal(1)
      end
    end
  end
end
