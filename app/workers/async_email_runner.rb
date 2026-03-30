class AsyncEmailRunner
  include Rubee::Asyncable
  include Sidekiq::Worker

  sidekiq_options queue: :low

  def perform(options)
    options = parse_options(options)
    method = options['method']
    Mailer.send(method, **options)
  end

  private

  def parse_options(options)
    return options unless options.is_a?(String)

    begin
      JSON.parse(options)
    rescue
      options
    end
  end
end
