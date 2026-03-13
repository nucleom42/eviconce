class AsyncEmailRunner
  include Rubee::Asyncable
  include Sidekiq::Worker

  sidekiq_options queue: :low

  def perform(options)
    method = options.delete(:method)
    Mailer.send(method, **options)
  end
end
