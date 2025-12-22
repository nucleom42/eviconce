class CreateEmployeeWindows
  def call
    return if Rubee::SequelObject::DB.tables.include?(:employee_windows)

    Rubee::SequelObject::DB.create_table(:employee_windows) do
      primary_key :id
      foreign_key :employee_id, :employees, null: false, on_delete: :cascade
      foreign_key :window_id, :windows, null: false, on_delete: :cascade
      DateTime :created
      DateTime :updated
    end
  end
end
