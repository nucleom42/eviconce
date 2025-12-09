require_relative '../test_helper'

describe 'Employee API' do
  include Rack::Test::Methods

  def app
    Rubee::Application.instance
  end

  describe 'POST /employees' do
    describe 'valid params' do
      # valid_params = { first_name: 'Hren', last_name: 'Hrenon', email: 'L4qyW@example.com',
      #                  password: '123456', description: 'nail specialist', phone: '1234567890',
      #                  role: 1 }
      # post('/employees', valid_params)

      # assert_equal(201, last_response.status)
    end

    describe 'invalid params' do

    end
  end
end
