class Image < Rubee::SequelObject
  attr_accessor :id, :created, :image_data, :type, :updated
  TYPES_MAP = {
    0 => :photo,
    1 => :logo,
  }
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

  # Setter for virtual image attribute - this is what you should use
  def image=(file)
    file = file[:tempfile] if file.is_a?(Hash) && file[:tempfile]

    attacher = ImageUploader::Attacher.new
    attacher.assign(file)

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
    image&.metadata&.[]("mime_type")
  end
end
