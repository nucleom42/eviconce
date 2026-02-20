Rubee::Router.draw do |router|
  # Register Shrine mages routes
  router.get('/images/uploads/cache/{filename}', to: 'base#image', namespace: 'Rubee')
  router.get('/images/uploads/{filename}', to: 'base#image', namespace: 'Rubee')

  ### ADDRESSES API ###
  router.get('/api/addresses', to: 'addresses#index', model: {
    name: 'address',
    attributes: [
      { name: 'id', type: 'primary' },
      { name: 'city', type: 'string', options: { null: false } },
      { name: 'country', type: 'string', options: { null: false } },
      { name: 'postal', type: 'string', options: { null: false } },
      { name: 'region', type: 'string', options: { null: false } },
      { name: 'lt', type: 'float', options: { null: true } },
      { name: 'ln', type: 'float', options: { null: true } },
      { name: 'street_line1', type: 'string', options: { null: false } },
      { name: 'street_line2', type: 'string', options: { null: true } },
      # timestamps
      { name: 'created', type: 'datetime' },
      { name: 'updated', type: 'datetime' },
      # indexes
      { name: 'postal', type: 'index' },
      { name: 'city', type: 'index' },
      { name: 'lt', type: 'index' },
      { name: 'ln', type: 'index' },
    ],
  })
  router.get('/api/addresses/{id}', to: 'addresses#show')
  router.get('/api/addresses/new', to: 'addresses#new')
  router.post('/api/addresses', to: 'addresses#create')
  router.get('/api/addresses/{id}/edit', to: 'addresses#edit')
  router.put('/api/addresses/{id}', to: 'addresses#update')
  router.delete('/api/addresses/{id}', to: 'addresses#destroy')
  ### END ADDRESSES API ###

  ### COMPANIES API ###
  router.get('/api/companies', to: 'companies#index', model: {
    name: 'company',
    attributes: [
      { name: 'id', type: 'primary' },
      { name: 'name', type: 'string', options: { null: false } },
      { name: 'email', type: 'string', options: { null: false } },
      { name: 'website', type: 'string', options: { null: true } },
      { name: 'phone', type: 'string', options: { null: true } },
      { name: 'description', type: 'string', options: { null: false } },
      { name: 'address_id', type: 'foreign_key', options: { null: true } },
      { name: 'created', type: 'datetime' },
      { name: 'updated', type: 'datetime' },
    ],
  })
  router.get('/api/companies/{name}', to: 'companies#show_by_name')
  router.get('/api/companies/{id}/dashboard', to: 'companies#dashboard')
  router.get('/api/companies/new', to: 'companies#new')
  router.post('/api/companies', to: 'companies#create')
  router.get('/api/companies/{id}/edit', to: 'companies#edit')
  router.put('/api/companies/{id}', to: 'companies#update')
  router.delete('/api/companies/{id}', to: 'companies#destroy')
  ### END COMPANIES API ###

  ### EMPLOYEE API ###
  router.get('/api/employees', to: 'employees#index', model: {
    name: 'employee',
    attributes: [
      { name: 'id', type: 'primary' },
      { name: 'first_name', type: 'string', options: { null: false } },
      { name: 'last_name', type: 'string', options: { null: true } },
      { name: 'company_id', type: 'foreign_key', options: { null: false } },
      { name: 'description', type: 'string', options: { null: false } },
      { name: 'email', type: 'string', options: { null: true } },
      { name: 'phone', type: 'string', options: { null: true } },
      { name: 'password_digest', type: 'string', options: { null: false } },
      { name: 'role', type: 'integer', options: { null: false, default: 0 } },
      { name: 'created', type: 'datetime' },
      { name: 'updated', type: 'datetime' },
    ],
  })
  router.get('/api/employees/{id}', to: 'employees#show')
  router.get('/api/employees/{id}/availability', to: 'employees#availability')
  router.get('/api/employees/new', to: 'employees#new')
  router.post('/api/employees', to: 'employees#create')
  router.post('/api/employees/logout', to: 'employees#logout')
  router.post('/api/employees/login', to: 'employees#login')
  router.get('/api/employees/{id}/edit', to: 'employees#edit')
  router.put('/api/employees/{id}', to: 'employees#update')
  router.delete('/api/employees/{id}', to: 'employees#destroy')
  ### END EMPLOYEE API ###

  ### CLIENT API ###
  router.get('/api/clients', to: 'clients#index', model: {
    name: 'client',
    attributes: [
      { name: 'id', type: 'primary' },
      { name: 'first_name', type: 'string', options: { null: false } },
      { name: 'last_name', type: 'string', options: { null: true } },
      { name: 'email', type: 'string', options: { null: true } },
      { name: 'phone', type: 'string', options: { null: true } },
      { name: 'password_digest', type: 'string', options: { null: false } },
      { name: 'created', type: 'datetime' },
      { name: 'updated', type: 'datetime' },
      { name: 'address_id', type: 'foreign_key', options: { null: true } },
      { name: 'email', type: 'index' },
    ],
  })
  router.get('/api/clients/{id}', to: 'clients#show')
  router.get('/api/clients/new', to: 'clients#new')
  router.post('/api/clients', to: 'clients#create')
  router.get('/api/clients/{id}/edit', to: 'clients#edit')
  router.put('/api/clients/{id}', to: 'clients#update')
  router.delete('/api/clients/{id}', to: 'clients#destroy')
  ### END CLIENT API ###

  ### ADD SERVICE ###
  router.get('/api/services', to: 'services#index', model: {
    name: 'service',
    attributes: [
      { name: 'id', type: 'primary' },
      { name: 'name', type: 'string', options: { null: false } },
      { name: 'description', type: 'string', options: { null: false } },
      { name: 'price', type: 'decimal', options: { null: true } },
      { name: 'duration', type: 'integer', options: { null: false, default: 0 } },
      { name: 'employee_id', type: 'foreign_key', options: { null: false } },
      { name: 'created', type: 'datetime' },
      { name: 'updated', type: 'datetime' },
      { name: 'name', type: 'index' },
      { name: 'description', type: 'index' },
    ],
  })
  router.get('/api/services/{id}', to: 'services#show')
  router.get('/api/services/new', to: 'services#new')
  router.post('/api/services', to: 'services#create')
  router.get('/api/services/{id}/edit', to: 'services#edit')
  router.put('/api/services/{id}', to: 'services#update')
  router.delete('/api/services/{id}', to: 'services#destroy')
  ### END ADD SERVICE ###

  ### TIME_SLOT API ###
  router.get('/api/time_slots', to: 'time_slots#index', model: {
    name: 'time_slot',
    attributes: [
      { name: 'id', type: 'primary' },
      { name: 'start', type: 'datetime', options: { null: false } },
      { name: 'end', type: 'datetime', options: { null: false } },
      { name: 'day', type: 'date', options: { null: false } },
      { name: 'employee_id', type: 'foreign_key', options: { null: false } },
      { name: 'client_id', type: 'foreign_key', options: { null: true } },
      { name: 'state', type: 'integer', options: { null: false, default: 0 } },
      { name: 'created', type: 'datetime' },
      { name: 'updated', type: 'datetime' },
    ],
  })
  router.get('/api/time_slots/{id}', to: 'time_slots#show')
  router.get('/api/time_slots/new', to: 'time_slots#new')
  router.post('/api/time_slots', to: 'time_slots#create')
  router.get('/api/time_slots/{id}/edit', to: 'time_slots#edit')
  router.put('/api/time_slots/{id}', to: 'time_slots#update')
  router.delete('/api/time_slots/{id}', to: 'time_slots#destroy')
  ### END TIME_SLOT API ###

  ### START WINDOW API ###
  router.get('/api/windows', to: 'windows#index', model: {
    name: 'window',
    attributes: [
      { name: 'id', type: 'primary' },
      { name: 'start_time', type: 'datetime', options: { null: false } },
      { name: 'end_time', type: 'datetime', options: { null: false } },
      { name: 'break_from', type: 'datetime', options: { null: false } },
      { name: 'break_to', type: 'datetime', options: { null: false } },
      { name: 'created', type: 'datetime' },
      { name: 'updated', type: 'datetime' },
    ],
  })
  router.post('/api/windows/upsert', to: 'windows#upsert')
  router.delete('/api/windows/{id}', to: 'windows#destroy')
  ### END WINDOW API ###

  ### START employee_windows ###
  router.get('/api/employee_windows', to: 'employee_windows#index', model: {
    name: 'employee_window',
    attributes: [
      { name: 'id', type: 'primary' },
      { name: 'employee_id', type: 'foreign_key', options: { null: false } },
      { name: 'window_id', type: 'foreign_key', options: { null: false } },
      { name: 'created', type: 'datetime' },
      { name: 'updated', type: 'datetime' },
    ],
  })
  ### END employee_windows ###
end
