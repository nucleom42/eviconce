class Dashboard
  include Rubee::Serializable
  include Rubee::Hookable

  attr_accessor :employees, :company, :user

  after :initialize, :serialize!

  def serialize!
    @employees = employees.map do |e|
      {
        id: e.id,
        first_name: e.first_name,
        last_name: e.last_name,
        email: e.email,
        role: e.role,
        description: e.description,
        phone: e.phone,
        services: e.services.map(&:to_h),
        window: e.current_window,
      }
    end
    @company = {
      id: company.id,
      name: company.name,
      email: company.email,
      phone: company.phone,
      address: company.address,
      website: company.website,
      description: company.description,
      logo: company.logo&.serializable_hash,
      images: company.images.map(&:serializable_hash),
    }
    @user = { id: user.id, first_name: user.first_name, last_name: user.last_name }
  end
end
