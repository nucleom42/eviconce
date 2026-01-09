class Hash
  def deep_dig(key)
    return self[key] if self[key]

    each do |_, v|
      if v.is_a?(Hash)
        return v.deep_dig(key)
      end
    end

    nil
  end
end
