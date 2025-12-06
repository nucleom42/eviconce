Rubee::Router.draw do |router|
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

  ### IMAGE API ###
  router.get('/api/images', to: 'images#index', model: {
    name: 'image',
    attributes: [
      { name: 'id', type: 'primary' },
      { name: 'image_data', type: 'jsonb', options: { null: false } },
      { name: 'created', type: 'datetime' },
      { name: 'updated', type: 'datetime' },
      { name: 'image_data', type: 'index', options: { type: 'gin', opclass: 'jsonb_path_ops' } },
    ],
  })
  ### END IMAGE API ###

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
  router.get('/api/companies/{id}', to: 'companies#show')
  router.get('/api/companies/new', to: 'companies#new')
  router.post('/api/companies', to: 'companies#create')
  router.get('/api/companies/{id}/edit', to: 'companies#edit')
  router.put('/api/companies/{id}', to: 'companies#update')
  router.delete('/api/companies/{id}', to: 'companies#destroy')
  ### END COMPANIES API ###
end
