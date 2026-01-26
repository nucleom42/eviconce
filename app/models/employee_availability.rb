class EmployeeAvailability
  include Rubee::Serializable
  include Rubee::Hookable

  attr_accessor :employee

  def serialize!(from, to)
    serialize_fields = TimeSlot.accessor_names.map(&:to_sym)
    @employee = {
      window: if employee.current_window.nil?
                nil
              else
                employee.current_window.to_h.tap do |window|
                  window[:weekends] = window[:weekends].map { |day_number| (day_number + 1) }
                end
              end,
      upcoming_windows: employee.upcoming_windows.map do |window|
        next if window.id == employee.current_window&.id

        window.to_h.tap do |w|
          w[:weekends] = w[:weekends].map { |day_number| (day_number + 1) }
        end
      end,
      time_slots: TimeSlot
        .dataset
        .select(
          Sequel[:time_slots].*,
          Sequel[:clients][:first_name],
          Sequel[:clients][:last_name],
        )
        .join(:clients, id: :client_id)
        .where(employee_id: employee.id, day: from..to)
        .all
        .map do |ts|
          original_ts = ts
          ts = ts.slice(*serialize_fields + ['first_name', 'last_name', 'duration'])
          ts['state'] = TimeSlot::STATES[ts['state']]
          ts['client'] = {
            first_name: original_ts['first_name'],
            last_name: original_ts['last_name'],
          }
          ts['duration'] = TimeSlot.new(ts.slice(*serialize_fields)).duration
          ts
        end,
    }
  end
end
