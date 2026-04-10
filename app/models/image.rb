class Image < Rubee::SequelObject
  VALID_TYPES = %w[image/jpeg image/png image/gif image/jpg].freeze

  TYPES_MAP = {
    0 => :photo,
    1 => :logo,
  }.freeze

  attr_accessor :id,
    :created,
    :image_data,
    :type,
    :updated

  validate do
    attribute(:image_data)
      .condition(-> {
        return true unless image_data
        VALID_TYPES.include?(image_mime_type)
      }, message: "Зображення має бути #{VALID_TYPES.join(', ')}")
      .condition(-> {
        return true unless image_data
        image_size < 5_242_880
      }, message: "Зображення не повинно бути більше 5 МБ")
  end

  after :destroy, :rm_file
  # Virtual attribute for image (Shrine provides this)
  def image
    return unless image_data

    ImageUploader::Attacher.from_data(image_data)&.file
  end

  def image_type
    TYPES_MAP[type]
  end

  def image_type=(type)
    self.type = TYPES_MAP.key(type)
  end

  def image=(file, options = {})
    file = file[:tempfile] if file.is_a?(Hash) && file[:tempfile]
    file_type = "image/#{file.path&.[](/(?<=\.)[^.]+/) || 'n/a'}"
    unless VALID_TYPES.include?(file_type)
      raise Rubee::Validatable::Error, "Зображення має бути #{VALID_TYPES.join(', ')}"
    end

    processed = ImageProcessing::MiniMagick
      .source(file)
      .resize_to_limit(800, 800)
      .quality(80)
      .call

    attacher = ImageUploader::Attacher.new
    attacher.assign(processed)
    self.image_data = attacher.data.to_json
  end

  def rm_file
    return unless image_data

    attacher = ImageUploader::Attacher.from_data(image_data)
    attacher.destroy
  end

  # Helper to get URL
  def image_url
    image&.url
  end

  def serializable_hash
    {
      id: id,
      image_url: image_url,
      image_name: image_filename,
      image_size: image_size,
      type: image_type,
    }
  end

  def image_filename
    image&.metadata&.[]("filename") || image&.original_filename
  end

  def image_size
    image&.metadata&.[]("size")
  end

  def image_mime_type
    image&.metadata&.[]("mime_type") || "image/#{image&.original_filename&.[](/(?<=\.)[^.]+/) || 'n/a'}"
  end
end
