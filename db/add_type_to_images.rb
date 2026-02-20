class AddTypeToImages
  def call
    return if Rubee::SequelObject::DB[:images]&.columns&.include?(:type)

    Rubee::SequelObject::DB.alter_table(:images) do
      add_column :type, :smallint, null: true, index: true
    end
  end
end
