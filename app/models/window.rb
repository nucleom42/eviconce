class Window < Rubee::SequelObject
  WEEKS = [1, 2, 3, 4, 5, 6, 7].freeze
  attr_accessor :id, :start_time, :end_time, :break_from, :break_to,
    :weekends, :effective_date, :created, :updated

  before :save, ->(m) { m.weekends = Sequel.pg_array(m.weekends) }

  validate do
    attribute(:start_time).required.type(Time).condition(-> { start_time < end_time })
    attribute(:end_time).required.type(Time).condition(-> { start_time < end_time })
    attribute(:break_from).required.type(Time).condition(-> { break_from < break_to })
    attribute(:break_to).required.type(Time).condition(-> { break_from < break_to })
    attribute(:effective_date).required.type(Date)
    attribute(:weekends).required
      .condition(-> { weekends.uniq.size == weekends.size && weekends.all? { |w| WEEKS.include?(w) } })
  end

  owns_many :employees, over: :employee_windows

  def add_employees(*employees)
    employees.map { |e| EmployeeWindow.create(employee_id: e.id, window_id: id) }
  end
end
