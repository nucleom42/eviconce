class AsyncEmailRunner
  include Rubee::Asyncable
  include Sidekiq::Worker

  sidekiq_options queue: :low

  def perform(options)
    options = parse_options(options)
    method = options['method']
    mailer_args = mailer_args(options)
    Mailer.send(method, **mailer_args)
  end

  private

  def mailer_args(options)
    {
      to: options['to'],
      client_name: options['client_name'],
      service: Service.find(options['service_id']),
      time_slot: TimeSlot.find(options['time_slot_id']),
    }
  end

  def parse_options(options)
    return options unless options.is_a?(String)

    begin
      JSON.parse(options)
    rescue
      options
    end
  end
end
