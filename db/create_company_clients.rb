class CreateCompanyClients
  def call
    return if Rubee::SequelObject::DB.tables.include?(:company_clients)

    Rubee::SequelObject::DB.create_table(:company_clients) do
      primary_key(:id)
      foreign_key(:company_id, :companies, null: false, on_delete: :cascade)
      foreign_key(:client_id, :clients, null: false, on_delete: :cascade)

      DateTime(:created)
      DateTime(:updated)
    end
  end
end
