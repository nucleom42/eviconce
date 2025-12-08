class RmCompanyFromEmployees
  def call
    return unless Rubee::SequelObject::DB[:employees].columns.include? :company_id

    Rubee::SequelObject::DB.alter_table(:employees) do
      drop_foreign_key :company_id
    end
  end
end
