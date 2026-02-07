class EmployeeWindow < Rubee::SequelObject
  attr_accessor :id, :employee_id, :window_id, :created, :updated

  holds :employee
  holds :window
end
