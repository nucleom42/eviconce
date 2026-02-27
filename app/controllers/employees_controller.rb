class EmployeesController < Rubee::BaseController
  include Rubee::AuthTokenable

  auth_methods :index, :update, :create, :destroy, :availability

  # GET /api/employees
  def index
    response_with object: @auth_user.my_company.employees, type: :json, status: 200
  rescue StandardError => e
    response_with object: { errors: e.message }, type: :json, status: 500
  end

  # PUT /api/employees
  def update
    employee = Employee.find(params[:id])
    employee.assign_attributes(employee_params.except(:id))
    employee.password = employee_params[:password] if employee_params[:password]

    if employee.valid? && employee.save
      response_with object: employee, type: :json, status: 200
    else
      response_with object: { errors: employee.errors }, type: :json, status: 422
    end
  rescue StandardError => e
    response_with object: { errors: e.message }, type: :json, status: 500
  end

  # POST /api/employees
  def create
    employee = Employee.new(employee_params)

    if employee.valid? && employee.save
      auth_user.my_company.add_employees(employee)
      response_with object: employee, type: :json, status: 201
    else
      response_with object: { errors: employee.errors }, type: :json, status: 422
    end
  rescue StandardError => e
    response_with object: { errors: e.message }, type: :json, status: 500
  end

  # DELETE /api/employees/{id}
  def destroy
    employee = Employee.find(params[:id])
    if employee&.destroy
      response_with object: { ok: :deleted }, type: :json, status: 200
    else
      response_with object: { errors: employee.errors }, type: :json, status: 422
    end
  rescue StandardError => e
    response_with object: { errors: e.message }, type: :json, status: 500
  end

  # GET /api/employees/{id}/availability
  def availability
    from = params[:from]
    to = params[:to]
    employee = Employee.find(params[:id])
    unless employee
      response_with object: { errors: :not_found }, type: :json, status: 404
      return
    end
    employee_availability = EmployeeAvailability.new(employee: employee)
    employee_availability.serialize!(from, to)
    response_with object: employee_availability, type: :json, status: 200
  rescue StandardError => e
    response_with object: { errors: e.message }, type: :json, status: 500
  end

  # GET /api/employees/{id}/frames
  def frames
    date = Date.parse params[:date]
    service = Service.find(params[:service_id])
    employee = Employee.find(params[:id])
    if employee.nil? || service.nil? || params[:date].nil?
      response_with object: { errors: :not_found }, type: :json, status: 404
      return
    end
    frames = employee.frames(date, service)
    response_with object: frames, type: :json, status: 200
  end

  # POST /api/employees/login
  def login
    params[:password_digest] = Employee.digest params[:password]

    if authentificate! user_model: Employee, login: :email, password: :password_digest
      response_with(
        object: { ok: :authentificated, company_id: auth_user&.my_company&.id },
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
    @auth_user ||= authentificated_user user_model: Employee, login: :email, password: :password_digest
  end

  def employee_params
    params[:employee].tap do |ee_params|
      ee_params['role'] = ee_params['role'].to_i
    end
  end
end
