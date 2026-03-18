class CreateCompanyCategories
  def call
    return if Rubee::SequelObject::DB.tables.include?(:company_categories)

    Rubee::SequelObject::DB.create_table(:company_categories) do
      primary_key :id
      foreign_key :company_id, :companies, null: false, on_delete: :cascade
      foreign_key :category_id, :categories, null: false, on_delete: :cascade
      DateTime :created
      DateTime :updated
      index [:company_id, :category_id], unique: true
    end
  end
end
