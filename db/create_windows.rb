Rubee::SequelObject::DB.extension :pg_array

class CreateWindows
  def call
    return if Rubee::SequelObject::DB.tables.include?(:windows)

    Rubee::SequelObject::DB.create_table(:windows) do
      primary_key :id
      DateTime :start_time, null: false
      DateTime :end_time, null: false
      DateTime :break_from, null: false
      DateTime :break_to, null: false
      Date :effective_date, null: false
      Date :end_date, null: true
      column :weekends, 'smallint[]', null: false, array: true, default: Sequel.pg_array([], :smallint)
      DateTime :created
      DateTime :updated
    end
  end
end
