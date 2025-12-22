class EmployeesController < Rubee::BaseController
  include Rubee::AuthTokenable

  # GET /api/employees
  def index
    response_with
  end

  # POST /api/employees
  def create
    employee = Employee.new(employee_params)

    if employee.valid? && employee.save
      response_with object: employee, type: :json, status: 201
    else
      response_with object: { errors: employee.errors }, type: :json, status: 422
    end
  rescue StandardError => e
    response_with object: { errors: e.message }, type: :json, status: 500
  end

  # POST /api/employees/login
  def login
    params[:password_digest] = Employee.digest params[:password]

    if authentificate! user_model: Employee, login: :email, password: :password_digest
      response_with(
        object: { ok: :authentificated, has_companies: auth_user.companies.any? },
        type: :json, status: 200, headers: @token_header
      )
    else
      response_with object: { errors: :unauthentificated }, type: :json, status: 401
    end
  rescue StandardError => e
    response_with object: { errors: e.message }, type: :json, status: 500
  end

  # POST /api/employees/logout
  def logout
    unauthentificate!

    response_with object: { ok: :unauthentificated }, type: :json, headers: @zeroed_token_header
  end

  private

  def auth_user
    authentificated_user user_model: Employee, login: :email, password: :password_digest
  end

  def employee_params
    params[:employee].tap do |ee_params|
      ee_params['role'] = ee_params['role'].to_i
    end
  end
end
