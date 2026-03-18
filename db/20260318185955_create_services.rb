class CreateServices
  def call
    return if Rubee::SequelObject::DB.tables.include?(:services)

    Rubee::SequelObject::DB.create_table(:services) do
      primary_key :id
      String :name, null: false
      String :description, null: false
      BigDecimal :price, null: true
      Integer :duration, null: false, default: 0
      foreign_key :employee_id, :employees, null: false
      DateTime :created
      DateTime :updated
      index :name
      index :description
    end
  end
end
