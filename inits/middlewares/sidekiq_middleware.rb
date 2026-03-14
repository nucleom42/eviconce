require 'sidekiq/web'
require 'rack/session'

class SidekiqMiddleware
  def initialize(app)
    @app = app

    session_secret = ENV.fetch('SESSION_SECRET') do
      generate_secret
    end

    @sidekiq_app = Rack::Builder.new do
      use Rack::Session::Cookie,
          secret: session_secret,
          same_site: true,
          max_age: 86400

      use Rack::Auth::Basic, "Sidekiq Dashboard" do |username, password|
        username == ENV.fetch('SIDEKIQ_USERNAME', 'admin') &&
        password == ENV.fetch('SIDEKIQ_PASSWORD', 'password')
      end

      run Sidekiq::Web
    end
  end

  def call(env)
    if env['PATH_INFO'].start_with?('/sidekiq')
      env['SCRIPT_NAME'] = '/sidekiq'
      env['PATH_INFO'] = env['PATH_INFO'].sub(%r{^/sidekiq}, '') || '/'
      @sidekiq_app.call(env)
    else
      @app.call(env)
    end
  end

  private

  def generate_secret
    secret_file = '.session.key'
    if File.exist?(secret_file)
      File.read(secret_file).strip
    else
      require 'securerandom'
      secret = SecureRandom.hex(64) # 64 hex chars = 128 bytes
      File.write(secret_file, secret)
      puts "Generated new session secret in #{secret_file}"
      secret
    end
  end
end
