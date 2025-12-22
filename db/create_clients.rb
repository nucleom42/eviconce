class CreateClients
  def call
    return if Rubee::SequelObject::DB.tables.include?(:clients)

    Rubee::SequelObject::DB.create_table(:clients) do
      primary_key :id
      String :first_name, null: false
      String :last_name, null: true
      String :email, null: true
      String :phone, null: true
      String :password_digest, null: false
      DateTime :created
      DateTime :updated
      foreign_key :address_id, :addresses, null: true, on_delete: :cascade
      index :email
    end
  end
end
