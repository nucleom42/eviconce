class DropUsers
  def call
    return unless Rubee::SequelObject::DB.tables.include?(:users)

    Rubee::SequelObject::DB.drop_table(:users)
  end
end
