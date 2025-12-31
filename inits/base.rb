Rubee::SequelObject.validate_after_setters # Triger validation after assigning attribute
Rubee::SequelObject.validate_before_persist!

require_relative 'searchable'
Rubee::SequelObject.include Searchable
