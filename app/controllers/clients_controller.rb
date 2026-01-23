class ClientsController < Rubee::BaseController
  include Rubee::AuthTokenable

  auth_methods :index
  before :index, :create, :set_company

  # GET /api/clients
  def index
    key = params[:search]
    clients = key ? search(key) : @company.clients
    response_with object: clients, type: :json, status: 200
  end

  # POST /api/clients
  def create
    Rubee::SequelObject::DB.transaction do
      client = Client.new(client_params)
      client.password = client.first_name
      if client.valid? && client.save && @company.add_clients(client)
        response_with object: client, type: :json, status: 201
      else
        response_with object: { errors: client.errors }, type: :json, status: 422
      end
    end
  rescue StandardError => e
    response_with object: { errors: e.message }, type: :json, status: 422
  end

  def client_params
    params.reject { |_, val| val.nil? }
  end

  def set_company
    @company ||= auth_user&.my_company
  end

  def search(key)
    Client.search(
      key,
      in_fields: [{ name: :first_name, limit: 5 }, { name: :email, limit: 5 }, { name: :last_name, limit: 3 }],
      dataset: Client.join(:company_clients, client_id: :id, company_id: @company.id)
    )
  end

  def auth_user
    authentificated_user user_model: Employee, login: :email, password: :password_digest
  end
end
