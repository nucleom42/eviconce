require "bundler/setup"
Bundler.require(:test)

require 'minitest/autorun'
require 'rack/test'
require 'rubee'
require 'stringio'

Rubee::Autoload.call

def assert_difference(expression, difference = 1)
  before = expression.call
  yield
  after = expression.call
  actual_diff = after - before

  assert_equal(difference, actual_diff,
    "Expected change of #{difference}, but got #{actual_diff}")
end

def capture_stdout
  old_stdout = $stdout
  $stdout = StringIO.new
  yield
  $stdout.string
ensure
  $stdout = old_stdout
end

def raise_error
  yield
rescue => e
  e
end

def current_time_ms
  Process.clock_gettime(Process::CLOCK_REALTIME, :millisecond)
end

class Minitest::Test
  class << self
    def before_suite
      DatabaseCleaner.truncate!
    end

    def after_suite
      DatabaseCleaner.truncate!
    end
  end
end
