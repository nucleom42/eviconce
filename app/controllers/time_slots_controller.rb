class TimeSlotsController < Rubee::BaseController
  include Rubee::AuthTokenable
  auth_methods :index, :create, :update, :destroy

  # GET /api/time_slots
  def index
    response_with
  end

  # POST /api/time_slots
  def create
    service = if service_params[:id]
      Service.find(service_params[:id])
    else
      Service.where(name: service_params[:name], employee_id: time_slot_params[:employee_id]).first
    end
    unless service
      return response_with object: { errors: 'Service is required' }, type: :json, status: 404
    end
    time_slot = TimeSlot.new(time_slot_params.except(:id).merge(service_id: service.id))
    if time_slot.valid? && time_slot.save
      response_with object: time_slot.serialized_hash, type: :json, status: 201
    else
      response_with object: { errors: time_slot.errors }, type: :json, status: 422
    end
  rescue StandardError => e
    response_with object: { errors: e.message }, type: :json, status: 500
  end
  # PUT /api/time_slots/{id}
  def update
    time_slot = TimeSlot.find(params[:id])
    time_slot.assign_attributes(time_slot_params.except(:id))
    if time_slot.valid? && time_slot.save
      response_with object: time_slot.serialized_hash, type: :json, status: 200
    else
      response_with object: { errors: time_slot.errors }, type: :json, status: 422
    end
  rescue StandardError => e
    response_with object: { errors: e.message }, type: :json, status: 500
  end

  # DELETE /api/time_slots/{id}
  def destroy
    time_slot = TimeSlot.find(params[:id])
    if time_slot.destroy
      response_with object: { ok: :deleted }, type: :json, status: 200
    else
      response_with object: { errors: time_slot.errors }, type: :json, status: 422
    end
  rescue StandardError => e
    response_with object: { errors: e.message }, type: :json, status: 500
  end

  private

  def service_params
    @service_params ||= {
      id: params[:service_id],
      name: params[:service_name],
      duration: params[:duration],
      price: params[:price],
    }.reject { |_, val| val.nil? }
  end

  def time_slot_params
    @time_slot_params ||= params.reject do |key, _|
      !TimeSlot.accessor_names.include?(key.to_sym)
    end.tap do |hash|
      hash[:start_time] = Time.parse(hash[:start_time])
      hash[:end_time] = Time.parse(hash[:end_time])
      hash[:day] = Date.parse(hash[:day])
      hash[:company_id] = hash[:company_id].to_i if hash[:company_id]
      hash[:client_id] = hash[:client_id].to_i if hash[:client_id]
      hash[:employee_id] = hash[:employee_id].to_i if hash[:employee_id]
      hash[:service_id] = hash[:service_id].to_i if hash[:service_id]
      hash[:state] = TimeSlot.state(hash[:state]) if hash[:state]
      hash[:price] = params.deep_dig(:price).to_f if params.deep_dig(:price)
    end
  end
end
