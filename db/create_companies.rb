class CreateCompanies
  def call
    return if Rubee::SequelObject::DB.tables.include?(:companies)

    Rubee::SequelObject::DB.create_table(:companies) do
      primary_key(:id)
      String(:name, null: 'false')
      String(:email, null: 'false')
      String(:website, null: 'true')
      String(:phone, null: 'true')
      String(:description, null: 'false')
      foreign_key(:address_id, :addresses, null: 'true')
      DateTime(:created)
      DateTime(:updated)
    end
  end
end
