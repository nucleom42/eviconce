class CompanyCategory < Rubee::SequelObject
  attr_accessor :id,
  :company_id,
  :category_id,
  :created,
  :updated

  holds :company
  holds :category
end
