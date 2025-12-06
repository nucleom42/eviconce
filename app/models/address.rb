class Address < Rubee::SequelObject
  attr_accessor :id, :city, :country, :postal, :region, :lt, :ln, :street_line1, :street_line2, :created, :updated

  validate_before_persist!
  validate do
    attribute(:city).required.type(String).condition(-> { city.length > 3 })
    attribute(:country).required.type(String).condition(-> { country.length > 3 })
    attribute(:postal).required.type(String).condition(-> { postal.length > 3 })
    attribute(:region).required.type(String).condition(-> { region.length > 3 })
    attribute(:lt).optional.type(Float)
    attribute(:ln).optional.type(Float)
    attribute(:street_line1).required.type(String).condition(-> { street_line1.length > 4 })
    attribute(:street_line2).optional.type(String).condition(-> { street_line2.length > 4 })
  end
end
