require_relative '../test_helper'

describe 'Image model' do
  after { Image.destroy_all }
  describe '.save' do
    describe 'when valid' do
      it 'should be valid' do
        image = Image.new(image_data: {})
        _(image.valid?).must_equal(true)
      end

      it 'should save' do
        image = Image.new(image_data: { url: 'url', width: 1, height: 1 })
        image.save
        _(image.persisted?).must_equal(true)
      end
    end
    describe 'when invalid' do
      it 'should raise error' do
        image = Image.new(image_data: 123)
        _(raise_error { image.save }).is_a?(Rubee::Validatable::Error)
      end
    end
  end
end
