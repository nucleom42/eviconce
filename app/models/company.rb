class Company < Rubee::SequelObject
  attr_accessor :id, :name, :email, :website, :phone, :description, :address_id, :created, :updated
end
