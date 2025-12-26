class CompaniesController < Rubee::BaseController
  include Rubee::AuthTokenable
  auth_methods :create, :index, :dashboard

  # GET /api/companies
  def index
    owner = authentificated_user user_model: Employee, login: :email, password: :password_digest
    response_with object: owner.companies.where(companny_params), type: :json, status: 200
  end

  # POST /api/companies
  def create
    Rubee::SequelObject::DB.transaction do
      address = Address.create(address_params)
      company = Company.create(companny_params.merge(address_id: address.id))
      owner = authentificated_user user_model: Employee, login: :email, password: :password_digest
      company.add_employees owner

      response_with(object: company, type: :json, status: 201)
    end
  rescue StandardError => e
    errors = begin
               e.message.gsub(/(\w+):/, '"\1":').then { |json| JSON.parse(json) }
             rescue
               e.message
             end
    response_with object: { errors: }, type: :json, status: 422
  end

  # GET /api/companies/{id}/dashboard
  def dashboard
    user = authentificated_user user_model: Employee, login: :email, password: :password_digest
    company = Company.find(params[:id])
    employees = company.employees
    unless user.companies.any? { |c| c.id == company.id }
      response_with object: { errors: :unauthentificated }, type: :json, status: 401
      return
    end

    response_with object: Dashboard.new(employees:, company:, user:), type: :json, status: 200
  rescue StandardError => e
    response_with object: { errors: e.message }, type: :json, status: 500
  end

  private

  def companny_params
    params[:company].reject { |_, val| val.strip == '' }
  end

  def address_params
    params[:address].reject { |_, val| val.strip == '' }
  end
end
