Sidekiq.configure_server do |config|
  config.redis = { url: ENV.fetch('REDIS_URL', 'redis://localhost:6379/0') }
end

Sidekiq.configure_client do |config|
  config.redis = { url: ENV.fetch('REDIS_URL', 'redis://localhost:6379/0') }
end

# Sidekiq is expected application context of ru.Bee to be loaded.
# However we don't want to load it twice by the ru.Bee project itself.
unless Object.const_defined?('Rubee')
  require 'rubee'
  # Load dev envs.
  require_relative 'dev.rb' if Rubee::Configuration.developmnt? || Rubee::Configuration.test?
  Rubee::Autoload.call
end
