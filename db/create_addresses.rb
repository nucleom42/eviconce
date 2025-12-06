class CreateAddresses
  def call
    return if Rubee::SequelObject::DB.tables.include?(:addresses)

    Rubee::SequelObject::DB.create_table(:addresses) do
      primary_key(:id)
      String(:city, null: false)
      String(:country, null: false)
      String(:postal, null: false)
      String(:region, null: true)
      String(:street_line1, null: false)
      String(:street_line2, null: true)
      Float(:lt, null: true)
      Float(:ln, null: true)

      DateTime(:created)
      DateTime(:updated)
      index(:postal)
      index(:city)
      index(:lt)
      index(:ln)
    end
  end
end
