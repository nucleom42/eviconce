class WindowsController < Rubee::BaseController
  include Rubee::AuthTokenable
  auth_methods :index, :upsert
  before :set_company

  # GET /api/windows
  def index
    response_with
  end

  # POST /api/windows/upsert
  def upsert
    Rubee::SequelObject::DB.transaction do
      found_window = window_params[:id] && Window.find(window_params[:id])
      window = if found_window && !found_window.has_time_slots?
        found_window.assign_attributes(window_params.except(:id, :employee_id))
        found_window
      else
        Window.new(window_params.except(:id, :employee_id))
      end

      found_employee = Employee.find(window_params[:employee_id])
      new_window_record = !window.persisted?
      window.save

      found_employee.add_windows(window).then do
        window.any_windows_with_effective_date_eq_or_later!
      end if new_window_record

      response_with object: window, type: :json, status: (new_window_record ? 201 : 200)
    end
  rescue StandardError => e
    response_with object: { errors: e.message }, type: :json, status: 422
  end

  def window_params
    params
      .reject { |_, val| val.nil? || val == "" }
      .tap do |hsh|
        if (effective_date = hsh.deep_dig(:effective_date))
          hsh[:effective_date] = Date.strptime(effective_date, "%Y-%m-%d")
        end

        if (end_date = hsh.deep_dig(:end_date))
          hsh[:end_date] = Date.strptime(end_date, "%Y-%m-%d")
        end

        if (employee_id = hsh.deep_dig(:employee_id))
          hsh[:employee_id] = employee_id.to_i
        end

        if (start_time = hsh.deep_dig(:start_time))
          hsh[:start_time] = Time.parse(start_time)
        end

        if (end_time = hsh.deep_dig(:end_time))
          hsh[:end_time] = Time.parse(end_time)
        end

        if (break_from = hsh.deep_dig(:break_from))
          hsh[:break_from] = Time.parse(break_from)
        end

        if (break_to = hsh.deep_dig(:break_to))
          hsh[:break_to] = Time.parse(break_to)
        end

        if (weekends = hsh.deep_dig(:weekends))
          hsh[:weekends] = weekends.map(&:to_i)
        end
      end
  end

  def set_company
    @company ||= auth_user&.my_company
  end
end
