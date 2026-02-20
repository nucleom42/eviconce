class CompanyImage < Rubee::SequelObject
  attr_accessor :id, :company_id, :image_id, :created, :updated

  holds :company
  holds :image
end
