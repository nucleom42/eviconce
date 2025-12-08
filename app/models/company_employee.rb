class CompanyEmployee < Rubee::SequelObject
  attr_accessor :id, :company_id, :employee_id, :created, :updated

  holds :company
  holds :employee
end
