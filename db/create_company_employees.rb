class CreateCompanyEmployees
  def call
    return if Rubee::SequelObject::DB.tables.include?(:company_employees)

    Rubee::SequelObject::DB.create_table(:company_employees) do
      primary_key(:id)
      foreign_key(:company_id, :companies, null: false, on_delete: :cascade)
      foreign_key(:employee_id, :employees, null: false, on_delete: :cascade)

      DateTime(:created)
      DateTime(:updated)
    end
  end
end
