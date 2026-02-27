class Frame
  include Rubee::Serializable
  include Rubee::Hookable

  attr_accessor :service_id, :date, :from, :to
end
