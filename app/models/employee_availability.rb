class EmployeeAvailability
  include Rubee::Serializable
  include Rubee::Hookable

  attr_accessor :employee

  def serialize!(from, to)
    @employee = {
      window: employee.current_window.to_h,
      time_slots: employee.time_slots(from..to).map(&:to_h),
    }
  end
end
