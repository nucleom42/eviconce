class CreateCompanyClients
  def call
    return if Rubee::SequelObject::DB.tables.include?(:company_clients)

    Rubee::SequelObject::DB.create_table(:company_clients) do
      primary_key(:id)
      foreign_key(:company_id, :companies, null: 'false')
      foreign_key(:client_id, :clients, null: 'false')

      DateTime(:created)
      DateTime(:updated)
    end
  end
end
