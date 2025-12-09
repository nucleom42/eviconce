class EmployeesController < Rubee::BaseController
  def index
    response_with
  end

  # POST /api/employees
  def create
    employee = Employee.new(employee_params)
    employee.password = employee_params[:password_digest]
    if employee.save
      response_with object: employee, status: 201, type: :json
    else
      response_with object: employee.errors, type: :json
    end
  end

  # POST /api/employees/login
  def login
    params[:password] = Employee.digest params[:password]
    if authentificate! user_model: Employee, login: :email, password: :password_digest
      response_with object: { message: :authentificated }, status: 200
    else
      response_with object: { message: :unauthentificated }, status: 401
    end
  end

  private

  def employee_params
    params.tap do |hash|
      hash[:password_digest] = hash.delete(:password)
    end
  end
end
