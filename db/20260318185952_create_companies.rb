class CreateCompanies
  def call
    return if Rubee::SequelObject::DB.tables.include?(:companies)

    Rubee::SequelObject::DB.create_table(:companies) do
      primary_key(:id)
      String(:name, null: false, unique: true)
      String(:email, null: false, unique: true)
      String(:website, null: true)
      String(:evikonce_url, null: true)
      String(:phone, null: true)
      String(:description, null: false)
      foreign_key(:address_id, :addresses, null: true, on_delete: :set_null)
      DateTime(:created)
      DateTime(:updated)
    end
  end
end
