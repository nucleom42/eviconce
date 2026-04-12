class CreateEmployees
  def call
    return if Rubee::SequelObject::DB.tables.include?(:employees)

    Rubee::SequelObject::DB.create_table(:employees) do
      primary_key(:id)
      String(:first_name, null: false)
      String(:last_name, null: true)
      String(:description, null: true)
      String(:email, null: true, unique: true)
      String(:phone, null: true)
      String(:password_digest, null: false)
      Integer(:role, null: false, default: 0)
      DateTime(:created)
      DateTime(:updated)
      foreign_key(:company_id, :companies, null: true, on_delete: :cascade)
      foreign_key(:image_id, :images, null: true, on_delete: :set_null)
      index([:company_id, :email], unique: true)
    end
  end
end
