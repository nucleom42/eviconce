class CompaniesController < Rubee::BaseController
  def index
    response_with
  end

  # POST /api/companies
  def create
    address = Address.new(address_params)
    if address.valid? && address.save
      company = Company.new(companny_params.merge(address_id: address.id))
    else
      response_with object: { errors: address.errors }, type: :json, status: 422
    end
    if company.valid? && company.save
      response_with object: company, type: :json, status: 201
    else
      address&.destroy
      response_with object: { errors: company.errors }, type: :json, status: 422
    end
  rescue StandardError => e
    address&.destroy
    response_with object: { errors: e.message }, type: :json, status: 500
  end

  private

  def companny_params
    params[:company]
  end

  def address_params
    params[:address]
  end
end
