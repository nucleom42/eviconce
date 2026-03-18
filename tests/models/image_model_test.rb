require_relative '../test_helper'

describe 'Image model' do
  after { Image.dataset.delete }
  describe '.save' do
    let(:image) do
      {
        "id" => "#{SecureRandom.hex}/test.jpg",
        "storage" => "store",
        "metadata" => {
          "filename" => filename,
          "size" => 1024,
          "mime_type" => "image/jpeg",
        },
      }
    end
    describe 'when valid' do
      it 'should be valid' do
        image = Image.new(image:)
        _(image.valid?).must_equal(true)
      end

      it 'should save' do
        image = Image.new(image:)
        image.save
        _(image.persisted?).must_equal(true)
      end
    end
    describe 'when invalid' do
      it 'should raise error' do
        _(raise_error { Image.new(image: {}) }.is_a?(Shrine::Error)).must_equal(true)
      end
    end
  end
end
