class Address < Rubee::SequelObject
  attr_accessor :id, :city, :country, :postal, :region, :lt, :ln, :street_line1, :street_line2, :created, :updated

  validate do
    attribute(:city).required('Місто обов`язкове').type(String)
      .condition(-> { city.length > 3 }, 'Місто має бути більше 3 символів')
    attribute(:country).required('Краіна обов`язкова').type(String)
      .condition(-> { country.length > 3 }, 'Краіна має бути більше 3 символів')
    attribute(:postal).required('Поштовий індекс обов`язковий').type(String)
      .condition(-> { postal.length > 3 }, 'Поштовий індекс має бути більше 3 символів')
    attribute(:region).required('Регіон обов`язковий').type(String)
      .condition(-> { region.length > 3 }, 'Регіон має бути більше 3 символів')
    attribute(:lt).optional.type(Float)
    attribute(:ln).optional.type(Float)
    attribute(:street_line1).required('Адреса обов`язкова').type(String)
      .condition(-> { street_line1.length > 4 }, 'Адреса1 має бути більше 4 символів')
    attribute(:street_line2).optional.type(String)
      .condition(-> { street_line2.length > 4 }, 'Адреса2 має бути більше 4 символів')
  end
end
