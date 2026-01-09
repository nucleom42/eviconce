class AddUniqIndexToCompanyEmployees
  def call
    return unless Rubee::SequelObject::DB.tables.include?(:company_employees)

    Rubee::SequelObject::DB.alter_table(:company_employees) do
      add_unique_constraint [:company_id, :employee_id], if_not_exists: true
    end
  end
end
