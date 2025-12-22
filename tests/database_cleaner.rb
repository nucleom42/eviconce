module DatabaseCleaner
  class << self
    def truncate!
      Rubee::SequelObject::DB.transaction do
        (Rubee::SequelObject::DB.tables - [:schema_migrations]).each do |table|
          Rubee::SequelObject::DB.run "TRUNCATE TABLE #{table} RESTART IDENTITY CASCADE"
        end
      end
    end
  end
end
