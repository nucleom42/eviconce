class CreateCategories
  def call
    return if Rubee::SequelObject::DB.tables.include?(:categories)

    Rubee::SequelObject::DB.create_table(:categories) do
      primary_key :id
      String :name, null: 'false'
      DateTime :created
      DateTime :updated
    end
  end
end
