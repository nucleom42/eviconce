class Dashboard
  include Rubee::Serializable
  include Rubee::Hookable

  attr_accessor :employees, :company, :user

  after :initialize, :serialize!

  def serialize!
    @employees = employees.map { |e| { id: e.id, first_name: e.first_name, last_name: e.last_name } }
    @company = { name: company.name }
    @user = { id: user.id, first_name: user.first_name, last_name: user.last_name }
  end
end
