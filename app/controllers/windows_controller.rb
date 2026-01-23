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
    window = window_params[:id] && Window.find(window_params[:id])
    if window && !window.has_time_slots? # update
      employee = Employee.find(window_params[:employee_id])
      window.assign_attributes(window_params.except(:id, :employee_id))
      if window.valid? && window.save && employee.add_windows(window)
        response_with object: window, type: :json, status: 200
      else
        response_with object: { errors: window.errors }, type: :json, status: 422
      end
    else # create
      window = Window.new(window_params.except(:id, :employee_id))
      if window.valid? && window.save
        response_with object: window, type: :json, status: 201
      else
        response_with object: { errors: window.errors }, type: :json, status: 422
      end
    end
  rescue StandardError => e
    response_with object: { errors: e.message }, type: :json, status: 500
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
