class Domain
  BASE = ENV.fetch('DOMAIN', 'http://localhost:7000')
  class << self
    def base_url
      BASE
    end

    def delete_time_slot_url(time_slot)
      "#{base_url}/ww/#{time_slot.destroy_token}"
    end
  end
end
