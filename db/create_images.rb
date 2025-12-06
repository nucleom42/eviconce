class CreateImages
  def call
    return if Rubee::SequelObject::DB.tables.include?(:images)

    Rubee::SequelObject::DB.create_table(:images) do
      primary_key(:id)
      column(:image_data, 'jsonb', null: false)

      DateTime(:created)
      DateTime(:updated)

      index(:image_data, type: :gin, opclass: :jsonb_path_ops)
    end
  end
end
