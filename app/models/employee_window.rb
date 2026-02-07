class EmployeeWindow < Rubee::SequelObject
  attr_accessor :id, :employee_id, :window_id, :created, :updated

  holds :employee
  holds :window

  # after :save, ->(m) do
  #   if m.window.any_windows_intersects?
  #     raise Rubee::Validatable::Error, "Window intersects with another window"
  #   end
  # end
end
