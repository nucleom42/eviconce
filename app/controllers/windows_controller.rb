class WindowsController < Rubee::BaseController
  include Rubee::AuthTokenable
  auth_methods :index, :upsert, :destroy
  before :set_company

  # GET /api/windows
  def index
    response_with
  end

  # POST /api/windows/upsert
  def upsert
    Rubee::SequelObject::DB.transaction do
      found_window = window_params[:id] && Window.find(window_params[:id])

      window = if found_window && !window_params[:end_date].nil?
        new_from = window_params[:effective_date]
        new_to   = window_params[:end_date]
        old_from = found_window.effective_date
        old_to   = found_window.end_date

        # Check slots in the gap if effective_date moved forward (orphaned at the start)
        if old_from < new_from && found_window.has_time_slots_in_range?(old_from, new_from - 1)
          raise Rubee::Validatable::Error,
            "Перед новою датою віконця є бронювання, видаліть їх"
        end

        # Check slots in the gap if end_date shrunk (orphaned at the end)
        if new_to && old_to && old_to > new_to && found_window.has_time_slots_in_range?(new_to + 1, old_to)
          raise Rubee::Validatable::Error,
            "Після нового дати віконця є бронювання, видаліть їх"
        end

        found_window.assign_attributes(window_params.except(:id, :employee_id))
        found_window
      else
        Window.new(window_params.except(:id))
      end

      # Define whether the record is new
      new_window_record = !window.persisted?

      # Validate before save for update path
      unless new_window_record
        unless window.all_time_slots_available?
          raise Rubee::Validatable::Error,
            "Віконце не може бути вже занято, видаліть бронювання"
        end
      end

      window.save

      if new_window_record
        # Normalize in case of previous endless
        prev_endless = window.previous_endless
        prev_endless&.update(end_date: window.effective_date - 1)
        # Final check if there is any intersections
        raise Rubee::Validatable::Error, "Час віконця перекривається" if window.any_windows_intersects?
      end

      response_with object: window, type: :json, status: (new_window_record ? 201 : 200)
    end
  rescue StandardError => e
    Rubee::Logger.error(message: e.backtrace.first(10).join("\n"), method: __method__, class_name: self.class.name)
    response_with object: { errors: e.message }, type: :json, status: 422
  end

  # DELETE /api/windows/{id}
  def destroy
    window = Window.find(params[:id])
    if window.company_id != @company.id
      response_with object: { errors: { id: 'Window not found' } }, type: :json, status: 404
    elsif window&.destroy
      response_with object: { ok: :deleted }, type: :json, status: 200
    else
      response_with object: { errors: window.errors }, type: :json, status: 422
    end
  rescue StandardError => e
    Rubee::Logger.error(message: e.backtrace.first(10).join("\n"), method: __method__, class_name: self.class.name)
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
    @company ||= authentificated_user(user_model: Employee, login: :email, password: :password_digest)&.company
  end
end
