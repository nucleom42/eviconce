class ClientsController < Rubee::BaseController
  include Rubee::AuthTokenable

  auth_methods :index
  before :index, :set_company

  def index
    key = params[:search]
    clients = key ? search(key) : @company.clients
    response_with object: clients, type: :json, status: 200
  end

  def set_company
    @company ||= auth_user.my_company
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
