class TimeSlotsController < Rubee::BaseController
  include Rubee::AuthTokenable
  auth_methods :index, :create

  # GET /api/time_slots
  def index
    response_with
  end

  # POST /api/time_slots
  def create
    time_slot = TimeSlot.new(time_slot_params)
    if time_slot.valid? && time_slot.save
      response_with object: time_slot.serialized_hash, type: :json, status: 201
    else
      response_with object: { errors: time_slot.errors }, type: :json, status: 422
    end
  rescue StandardError => e
    response_with object: { errors: e.message }, type: :json, status: 500
  end

  private

  def time_slot_params
    params.reject do |key, _|
      !TimeSlot.accessor_names.include?(key.to_sym)
    end.tap do |hash|
      hash[:start_time] = Time.parse(hash[:start_time])
      hash[:end_time] = Time.parse(hash[:end_time])
      hash[:day] = Date.parse(hash[:day])
      hash[:company_id] = hash[:company_id].to_i
      hash[:client_id] = hash[:client_id].to_i if hash[:client_id]
      hash[:employee_id] = hash[:employee_id].to_i
      hash[:state] = TimeSlot.status_to_state(hash[:state]) if hash[:state]
    end
  end
end
