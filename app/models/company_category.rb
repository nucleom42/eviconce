class CompanyCategory < Rubee::SequelObject
  attr_accessor :company_id, :category_id, :created, :updated, :id

  holds :company
  holds :category
end
