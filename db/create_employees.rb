class CreateEmployees
  def call
    return if Rubee::SequelObject::DB.tables.include?(:employees)

    Rubee::SequelObject::DB.create_table(:employees) do
      primary_key(:id)
      String(:first_name, null: false)
      String(:last_name, null: true)
      foreign_key(:company_id, :companies, null: false, on_delete: :cascade)
      String(:description, null: false)
      String(:email, null: true)
      String(:phone, null: true)
      String(:password_digest, null: false)
      Integer(:role, null: false, default: 0)
      DateTime(:created)
      DateTime(:updated)
      index([:company_id, :first_name, :last_name], unique: true)
    end
  end
end
