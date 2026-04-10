class ImagesController < Rubee::BaseController
  include Rubee::AuthTokenable

  auth_methods :destroy

  def destroy
    image = Image.find(params[:id])
    if image.destroy
      response_with object: { ok: :deleted }, type: :json, status: 200
    else
      response_with object: { errors: image.errors }, type: :json, status: 422
    end
  rescue StandardError => e
    Rubee::Logger.error(message: e.backtrace.first(10).join("\n"), method: __method__, class_name: self.class.name)
    response_with object: { errors: e.message }, type: :json, status: 500
  end
end
