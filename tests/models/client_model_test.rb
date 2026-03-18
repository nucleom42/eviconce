require_relative '../test_helper'

describe 'Client model' do
  describe '.save' do
    let!(:company) do
      company = Company.create(
        name: "name#{current_time_ms}", email: "ok#{current_time_ms}@ok.com", website: 'https://ok.com',
        phone: '+123112123', description: 'description'
      )
      company
    end
    describe 'when valid' do
      it 'should be valid' do
        client = Client.new(first_name: 'first_name', last_name: 'last_name',
                            email: "ok#{Time.now.to_i}@ok.com", phone: 'phone',
                            password_digest: 'password_digest', company_id: company.id)
        client.password = 'password_digest'
        _(client.valid?).must_equal(true)
      end

      it 'should save' do
        client = Client.new(first_name: 'first_name', last_name: 'last_name',
                            email: "ok#{Time.now.to_i}@ok.com", phone: 'phone',
                            password_digest: 'password_digest', company_id: company.id)
        client.password = 'password_digest'
        _(client.save).must_equal(true)
      end
    end

    describe 'when invalid' do
      it 'should be invalid' do
        client = Client.new(first_name: 'v', last_name: 'last_name', email: 'email', phone: 'phone',
                            password_digest: 'password_digest', company_id: company.id)
        _(client.valid?).must_equal(false)
      end

      it 'should raise error' do
        _(
          raise_error do
            Client.create(first_name: 'v', last_name: 'last_name', email: 'email', phone: 'phone',
                       password_digest: 'password_digest', company_id: company.id)
          end
        ).is_a?(Rubee::Validatable::Error)
      end
    end

    describe 'whenn passowd is not set over password= method' do
      it 'should not be valid' do
        client = Client.new(first_name: 'first_name', last_name: 'last_name', email: 'email', phone: 'phone',
                            password_digest: 'password_digest', company_id: company.id)
        _(client.valid?).must_equal(false)
      end
    end

    describe 'address association' do
      it 'should bring the address' do
        address = Address.new(city: 'city', country: 'country', postal: 'postal', region: 'region',
                           street_line1: 'street_line1', street_line2: 'street_line2', lt: 1.0, ln: 1.0)
        address.save
        client = Client.new(first_name: 'first_name', last_name: 'last_name',
                            email: "ok#{Time.now.to_i}@ok.com", phone: 'phone',
                            password_digest: 'password_digest', address_id: address.id, company_id: company.id)
        client.password = 'password_digest'
        client.save
        _(client.address.id).must_equal(address.id)
      end
    end

    describe 'holds company' do
      it 'should hold company' do
        client = Client.new(first_name: 'first_name', last_name: 'last_name',
                            email: "ok#{Time.now.to_i}@ok.com", phone: 'phone',
                               password_digest: 'password_digest', company_id: company.id)
        client.password = 'password_digest'
        client.save

        _(client.company.id).must_equal(company.id)
      end
    end
  end
end
