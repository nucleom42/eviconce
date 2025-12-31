module Searchable
  def self.included(base)
    base.extend ClassMethods
  end

  module ClassMethods
    # fields: array of hashes [{ name: :first_name, limit: 3 }, { name: :email }]
    def search(key, **options)
      query      = key.to_s.strip
      min_length = options.fetch(:min_length, 3)
      fields     = options.fetch(:in_fields, [])
      sub_query  = options.fetch(:dataset, dataset)

      return [] if query.length < min_length
      return [] if fields.empty?

      pattern = "%#{query}%"

      limit_presented = fields.any? do |field_hash|
        field_hash[:limit]
      end

      output = if limit_presented
        query_with_limit(fields, pattern, sub_query)
      else
        query_with_or(fields, pattern, sub_query)
      end

      serialize(output)
    end

    private

    # It uses 1 query but mix up output
    def query_with_or(fields, pattern, base_dataset)
      conditions = fields.map do |field_hash|
        field_hash => { name: name, **_opts }
        Sequel.ilike(Sequel[base_dataset.first_source][name.to_sym], pattern)
      end
      base_dataset
        .where(Sequel.|(*conditions))
        .distinct(Sequel[base_dataset.first_source][:id])
        .all
    end

    # It uses multiple queries an Ruby uniq: can be expensive on big output
    def query_with_limit(fields, pattern, base_dataset)
      fields.each_with_object([]) do |field_hash, result|
        field_hash => { name: name, **opts }
        pre_limit_query = base_dataset.where(Sequel.ilike(Sequel[base_dataset.first_source][name.to_sym], pattern))
        pre_limit_query.limit(opts[:limit]) if opts[:limit]
        result.concat(pre_limit_query.all)
      end.uniq
    end
  end
end
