class ClientsController < Rubee::BaseController
  include Rubee::AuthTokenable
  include Authorizable

  auth_methods :index, :update, :destroy
  authorize admin: [:destroy, :update]

  before :index, :create, :update, :destroy, :set_company

  # GET /api/clients
  def index
    key = params[:search]
    clients = key ? search(key) : @company.clients
    response_with object: clients, type: :json, status: 200
  end

  # POST /api/clients
  def create
    Rubee::SequelObject::DB.transaction do
      client = Client.find_or_new(client_params.except(:id).merge(company_id: @company.id))
      persisted = client.persisted?
      client.password = client_params[:password] || client.first_name unless persisted
      if persisted || (client.valid? && client.save)
        response_with object: client, type: :json, status: persisted ? 200 : 201
      else
        errors = if client.errors.deep_dig(:sequel_error)&.include?('PG::UniqueViolation')
          { errors: { email: 'Користувач з такою поштою вже існує' } }
        else
          { errors: client.errors }
        end
        response_with(object: errors, type: :json, status: 422)
      end
    end
  rescue StandardError => e
    Rubee::Logger.error(message: e.backtrace.first(10).join("\n"), method: __method__, class_name: self.class.name)
    response_with(object: { errors: e.message }, type: :json, status: 422)
  end

  # PUT /api/clients/{id}
  def update
    client = Client.find(params[:id])
    client.assign_attributes(client_params.except(:id).merge(company_id: @company.id))
    client.password = client_params[:password] if client_params[:password]

    if client.valid? && client.save
      response_with object: client, type: :json, status: 200
    else
      errors = if client.errors.deep_dig(:sequel_error)&.include?('PG::UniqueViolation')
        { errors: { email: 'Користувач з такою поштою вже існує' } }
      else
        { errors: client.errors }
      end
      response_with(object: errors, type: :json, status: 422)
    end
  rescue StandardError => e
    Rubee::Logger.error(message: e.backtrace.first(10).join("\n"), method: __method__, class_name: self.class.name)
    response_with(object: { errors: e.message }, type: :json, status: 500)
  end

  # DELETE /api/clients/{id}
  def destroy
    client = Client.find(params[:id])
    if client.company_id != @company.id
      response_with(object: { errors: { id: 'Користувач не знайдено' } }, type: :json, status: 404)
    end
    if client.destroy
      response_with(object: { ok: :deleted }, type: :json, status: 200)
    else
      response_with(object: { errors: client.errors }, type: :json, status: 422)
    end
  rescue StandardError => e
    Rubee::Logger.error(message: e.backtrace.first(10).join("\n"), method: __method__, class_name: self.class.name)
    response_with(object: { errors: e.message }, type: :json, status: 500)
  end

  def client_params
    target_hash = params[:client] || params
    @client_params ||= target_hash.reject { |_, val| val.nil? }
  end

  def set_company
    @company ||= auth_user ? auth_user&.company : Company.find(params[:company_id])
  end

  def search(key)
    Client.search(
      key,
      in_fields: [{ name: :first_name, limit: 5 }, { name: :email, limit: 5 }, { name: :last_name, limit: 3 }],
      dataset: Client.dataset.where(company_id: @company.id)
    )
  end

  def auth_user
    authentificated_user user_model: Employee, login: :email, password: :password_digest
  end
end
