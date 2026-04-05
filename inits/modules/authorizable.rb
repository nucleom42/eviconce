module Authorizable
  def self.included(base)
    base.extend ClassMethods
    base.send :include, InstanceMethods
  end

  module InstanceMethods
    def authorized?(role)
      authentificated? && authentificated_user(user_model: ::Employee).role_name.to_s == role.to_s
    end
  end

  module ClassMethods
    def authorize(**args)
      @authorizations ||= {}
      @authorizations.merge!(args)
      @authorizations.each do |role, methods|
        methods = methods.is_a?(Array) ? methods : [methods]
        methods.each do |method|
          around method, ->(controller, &original_action) do
            if controller.send(:authorized?, role)
              original_action.call
            else
              controller.response_with(object: { error: 'Unauthorized' }, type: :json, status: 403)
            end
          end
        end
      end
    end
  end
end
