require_relative '../test_helper'

describe 'Company model' do
  after do
    Company.destroy_all
    Address.destroy_all
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
        _(raise_error { company.save }).is_a?(Rubee::Validatable::Error)
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
  end
end
