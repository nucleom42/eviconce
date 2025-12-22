class CreateTimeSlots
  def call
    return if Rubee::SequelObject::DB.tables.include?(:time_slots)

    Rubee::SequelObject::DB.create_table(:time_slots) do
      primary_key :id
      DateTime :start_time, null: false
      DateTime :end_time, null: false
      Date :day, null: false
      foreign_key :employee_id, :employees, null: false, on_delete: :cascade
      foreign_key :client_id, :clients, null: true, on_delete: :cascade
      foreign_key :company_id, :companies, null: false, on_delete: :cascade
      Integer :state, null: false, default: 0
      DateTime :created
      DateTime :updated
      index :day
      index [:company_id, :employee_id]
      index [:day, :employee_id]
    end
  end
end
