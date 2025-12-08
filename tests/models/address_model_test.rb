require_relative '../test_helper'

describe 'Address model' do
  after { Address.destroy_all }
  describe '.save' do
    describe 'when valid' do
      it 'should be valid' do
        address = Address.new(city: 'city', country: 'country', postal: 'postal', region: 'region',
                           street_line1: 'street_line1', street_line2: 'street_line2', lt: 1.0, ln: 1.0)
        _(address.valid?).must_equal(true)
      end

      it 'should save' do
        address = Address.new(city: 'city', country: 'country', postal: 'postal', region: 'region',
                           street_line1: 'street_line1', street_line2: 'street_line2', lt: 1.0, ln: 1.0)
        address.save
        _(address.persisted?).must_equal(true)
      end
    end
    describe 'when invalid' do
      it 'should be invalid' do
        address = Address.new(city: 'ci', country: 'country', postal: 'postal', region: 'region',
                           street_line1: 'street_line1', street_line2: 'street_line2', lt: 1.0, ln: 1.0)
        _(address.valid?).must_equal(false)
      end

      it 'should not save' do
        address = Address.new(city: 'city', country: 'country', postal: 'postal', region: 'region',
                           street_line1: 'street_line1', street_line2: 'street_line2', lt: 1, ln: 0)
        _(raise_error { address.save }.is_a?(Rubee::Validatable::Error)).must_equal(true)
      end
    end
  end
  describe '#create' do
    describe 'when valid' do
      it 'should persist' do
        address = Address.create(city: 'city', country: 'country', postal: 'postal', region: 'region',
                           street_line1: 'street_line1', street_line2: 'street_line2', lt: 1.0, ln: 1.0)
        _(address.persisted?).must_equal(true)
      end
    end
    describe 'when invalid' do
      it 'should raise error' do
        _(
          raise_error do
            Address.create(city: 'ci', country: 'country', postal: 'postal', region: 'region',
                               street_line1: 'street_line1', street_line2: 'street_line2', lt: 1.0, ln: 1.0)
          end.is_a?(Rubee::Validatable::Error)
        ).must_equal(true)
      end
    end
  end
  describe '.udpate' do
    describe 'when valid' do
      it 'should update' do
        address = Address.create(city: 'city', country: 'country', postal: 'postal', region: 'region',
                           street_line1: 'street_line1', street_line2: 'street_line2', lt: 1.0, ln: 1.0)
        address.update(city: 'new city', country: 'new country', postal: 'new postal', region: 'new region',
                       street_line1: 'new street_line1', street_line2: 'new street_line2', lt: 2.0, ln: 2.0)
        _(address.city).must_equal('new city')
      end
    end
    describe 'when invalid' do
      it 'should raise error' do
        address = Address.create(city: 'city', country: 'country', postal: 'postal', region: 'region',
                           street_line1: 'street_line1', street_line2: 'street_line2', lt: 1.0, ln: 1.0)
        _(
          raise_error do
            address.update(city: 'ci', country: 'country', postal: 'postal', region: 'region',
                           street_line1: 'street_line1', street_line2: 'street_line2', lt: 1.0, ln: 1.0)
          end.is_a?(Rubee::Validatable::Error)
        ).must_equal(true)
      end
    end
  end
end
