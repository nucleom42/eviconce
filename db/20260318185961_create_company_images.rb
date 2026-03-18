class CreateCompanyImages
  def call
    return if Rubee::SequelObject::DB.tables.include?(:company_images)

    Rubee::SequelObject::DB.create_table(:company_images) do
      primary_key(:id)
      foreign_key(:company_id, :companies, null: false, on_delete: :cascade)
      foreign_key(:image_id, :images, null: false, on_delete: :cascade)

      DateTime(:created)
      DateTime(:updated)
    end
  end
end
