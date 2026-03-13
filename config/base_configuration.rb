require_relative '../inits/middlewares/sidekiq_middleware'
Rubee::Configuration.setup(env = :development) do |config|
  config.database_url = { url: 'postgres://postgres@localhost:5432/development', env: }

  config.react = { on: true, env: }
  config.rubee_support = { all: true }
  config.async_adapter = { async_adapter: Rubee::SidekiqAsync, env: }
  config.middlewares = { middlewares: [SidekiqMiddleware], env: }
end

Rubee::Configuration.setup(env = :test) do |config|
  config.database_url = { url: 'postgres://postgres@localhost:5432/test', env: }

  config.react = { on: true, env: }
  config.rubee_support = { all: true }
  config.async_adapter = { async_adapter: Rubee::SidekiqAsync, env: }
  config.middlewares = { middlewares: [SidekiqMiddleware], env: }
end

Rubee::Configuration.setup(env = :production) do |config|
  config.database_url = { url: 'postgres://postgres@localhost:5432/production', env: }

  config.react = { on: true, env: }
  config.rubee_support = { all: true }
  config.async_adapter = { async_adapter: Rubee::SidekiqAsync, env: }
  config.middlewares = { middlewares: [SidekiqMiddleware], env: }
end

