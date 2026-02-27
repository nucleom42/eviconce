class WebsiteCompany
  include Rubee::Serializable
  include Rubee::Hookable

  attr_accessor :employees, :company

  after :initialize, :serialize!

  def serialize!
    @employees = employees.map do |e|
      {
        id: e.id,
        first_name: e.first_name,
        last_name: e.last_name,
        email: e.email,
        description: e.description,
        phone: e.phone,
        services: e.services.map(&:to_h),
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
      logo: company.logo&.image_url,
      images: company.images&.map(&:image_url)&.filter { |i| i != company.logo&.image_url },
    }
  end
end
