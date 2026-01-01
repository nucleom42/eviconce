class EmployeeAvailability
  include Rubee::Serializable
  include Rubee::Hookable

  attr_accessor :employee

  def serialize!(from, to)
    serialize_fields = TimeSlot.accessor_names.map(&:to_sym)
    @employee = {
      window: employee.current_window.to_h,
      time_slots: TimeSlot
        .dataset
        .join(:clients, id: :client_id)
        .where(employee_id: employee.id, day: from..to)
        .all
        .map do |ts|
          original_ts = ts
          ts = ts.slice(*serialize_fields + ['first_name', 'last_name'])
          ts['state'] = TimeSlot::STATES[ts['state']]
          ts['client'] = {
            first_name: original_ts['first_name'],
            last_name: original_ts['last_name'],
          }
          ts
        end,
    }
  end
end
