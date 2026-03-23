class CompaniesController < Rubee::BaseController
  include Rubee::AuthTokenable
  auth_methods :create, :dashboard, :update

  # GET /api/companies
  def index
    query = Company.dataset
    query = query.join(:addresses, id: :address_id).where(
      Sequel.lit("addresses.city ILIKE ?", "%#{search_params[:city].gsub(/[%_\\]/) { |m| "\\#{m}" }}%")
    ) if search_params[:city]
    if search_params[:categories].any?
      category_conditions = search_params[:categories].map do |cat_name|
        escaped_cat = cat_name.gsub(/[%_\\]/) { |m| "\\#{m}" }
        Sequel.lit("categories.name ILIKE ?", "%#{escaped_cat}%")
      end
      query = query
        .join(:company_categories, { company_id: Sequel[:companies][:id] })
        .join(:categories, { id: Sequel[:company_categories][:category_id] })
        .where(Sequel.|(*category_conditions))
        .select_all(:companies)
        .distinct
    end
    query = query.where(
      Sequel.lit("companies.name ILIKE ?", "%#{search_params[:name].gsub(/[%_\\]/) { |m| "\\#{m}" }}%")
    ) if search_params[:name]
    response_with object: query.select_all(:companies).limit(10).then { |ds| Company.serialize(ds) }, type: :json, status: 200
  rescue StandardError => e
    response_with object: { errors: e.message }, type: :json, status: 500
  end

  # GET /api/companies/{name}
  def show_by_name
    search_hash = { name: params[:name].downcase.gsub('-', ' ') }
    found_company = Company.search(
      search_hash.values[0],
      in_fields: [name: search_hash.keys[0]],
      dataset: Company.dataset
    ).first

    if found_company
      response_with(
        object: WebsiteCompany.new(company: found_company, employees: found_company.employees),
        type: :json,
        status: 200,
      )
    else
      response_with object: { errors: :not_found }, type: :json, status: 404
    end
  rescue StandardError => e
    response_with object: { errors: e.message }, type: :json, status: 500
  end

  # POST /api/companies
  def create
    Rubee::SequelObject::DB.transaction do
      address = Address.create(address_params)
      owner = authentificated_user user_model: Employee, login: :email, password: :password_digest
      company = Company.create(companny_params.merge(address_id: address.id))
      owner.update(company_id: company.id)
      company.attach_categories_by_names(category_params)

      response_with(object: company, type: :json, status: 201)
    end
  rescue StandardError => e
    errors = begin
               e.message.gsub(/(\w+):/, '"\1":').then { |json| JSON.parse(json) }
             rescue
               e.message
             end
    response_with object: { errors: }, type: :json, status: 422
  end

  # PUT /api/companies/{id}
  def update
    Rubee::SequelObject::DB.transaction do
      company = Company.find(params[:id])
      company.assign_attributes(companny_params)
      address = company.address
      address.assign_attributes(address_params)
      if company.valid? && company.save && address.valid? && address.save
        persist_images!(company)
        company.replace_categories_by_names(*category_params)
        response_with object: company, type: :json, status: 200
      else
        response_with object: { errors: company.errors }, type: :json, status: 422
      end
    end
  rescue StandardError => e
    response_with object: { errors: e.message }, type: :json, status: 500
  end

  # GET /api/companies/{id}/dashboard
  def dashboard
    user = authentificated_user user_model: Employee, login: :email, password: :password_digest
    company = Company.find(params[:id])
    employees = company.employees
    unless user.company
      response_with object: { errors: :unauthentificated }, type: :json, status: 401
      return
    end

    response_with object: Dashboard.new(employees:, company:, user:), type: :json, status: 200
  rescue StandardError => e
    response_with object: { errors: e.message }, type: :json, status: 500
  end

  private

  def persist_images!(company)
    if images_file_params&.any?
      images_file_params.each do |image|
        image = Image.new(image: image)
        image.image_type = :photo
        image.save
        company.add_images(image)
      end
    end
    if logo_file_params
      company.logo&.destroy
      logo_image = Image.new(image: logo_file_params)
      logo_image.image_type = :logo
      logo_image.save
      company.add_images(logo_image)
    end
  end

  def logo_file_params
    params[:logo]
  end

  def images_file_params
    params[:images]
  end

  def companny_params
    params[:company].reject { |k, val| k == :logo || (val.is_a?(String) && val.strip == '') }
  end

  def address_params
    params[:address].reject { |_, val| val.strip == '' }
  end

  def search_params
    params[:params]
  end

  def category_params
    params[:categories]
  end
end
