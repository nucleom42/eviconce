class ServicesController < Rubee::BaseController
  include Rubee::AuthTokenable
  auth_methods :index, :create, :update
  before :set_company

  # GET /api/services
  def index
    response_with
  end

  # POST /api/services
  def create
    service = Service.new(service_params)
    if company && company.owner != authentificated_user(user_model: Employee, login: :email, password: :password_digest)
      response_with object: { errors: :unauthentificated }, type: :json, status: 401
    elsif service.valid? && service.save
      response_with object: service, type: :json, status: 201
    else
      response_with object: { errors: service.errors }, type: :json, status: 422
    end
  rescue StandardError => e
    Rubee::Logger.error(message: e.backtrace.first(10).join("\n"), method: __method__, class_name: self.class.name)
    response_with object: { errors: e.message }, type: :json, status: 500
  end

  # PUT /api/services/{id}
  def update
    service = Service.find(params[:id])
    service.assign_attributes(service_params.except(:id))
    if company && company.owner != authentificated_user(user_model: Employee, login: :email, password: :password_digest)
      response_with object: { errors: :unauthentificated }, type: :json, status: 401
    elsif service.valid? && service.save
      response_with object: service, type: :json, status: 200
    else
      response_with object: { errors: service.errors }, type: :json, status: 422
    end
  rescue StandardError => e
    Rubee::Logger.error(message: e.backtrace.first(10).join("\n"), method: __method__, class_name: self.class.name)
    response_with object: { errors: e.message }, type: :json, status: 500
  end

  # DELETE /api/services/{id}
  def destroy
    service = Service.find(params[:id])
    if company && company.owner != authentificated_user(user_model: Employee, login: :email, password: :password_digest)
      response_with object: { errors: :unauthentificated }, type: :json, status: 401
    elsif service&.destroy
      response_with object: { ok: :deleted }, type: :json, status: 200
    else
      response_with object: { errors: service.errors }, type: :json, status: 422
    end
  rescue StandardError => e
    Rubee::Logger.error(message: e.backtrace.first(10).join("\n"), method: __method__, class_name: self.class.name)
    response_with object: { errors: e.message }, type: :json, status: 500
  end

  def service_params
    params.reject { |_, val| val.nil? }.tap do |hash|
      hash[:price] = params.deep_dig(:price)&.to_f
      hash[:duration] = params.deep_dig(:duration)&.to_i
    end
  end

  def set_company
    @company ||= authentificated_user(user_model: Employee, login: :email, password: :password_digest)&.company
  end
end
