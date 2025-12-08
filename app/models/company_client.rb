class CompanyClient < Rubee::SequelObject
  attr_accessor :company_id, :client_id, :created, :updated, :id

  holds :companny
  holds :client
end
