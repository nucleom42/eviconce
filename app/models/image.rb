class Image < Rubee::SequelObject
  include ImageUploader::Attachment(:image)

  attr_accessor :id, :image_data, :created, :updated

  after :initialize, :image_data_jsonify
  after :image_data=, :image_data_jsonify

  validate_before_persist!
  validate do
    attribute(:image_data).required.type(String)
  end

  # Hashed getter
  def image_data_h
    return unless image_data&.is_a?(String)

    JSON.parse(image_data)
  end

  def image_data_jsonify
    return unless image_data&.is_a?(Hash)

    @image_data = image_data.to_json
  rescue => e
    errors.add_error(:image_data, message: e.message)
  end
end
