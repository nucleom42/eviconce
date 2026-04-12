STRUCTURE = {
  addresses: {
    columns: {
      id: {
        oid: 23,
        comment: nil,
        db_type: "integer",
        default: nil,
        allow_null: false,
        primary_key: true,
        generated: false,
        type: "integer",
        auto_increment: true,
        ruby_default: nil,
        min_value: -2147483648,
        max_value: 2147483647
      },
      city: {
        oid: 25,
        comment: nil,
        db_type: "text",
        default: nil,
        allow_null: false,
        primary_key: false,
        generated: false,
        type: "string",
        ruby_default: nil
      },
      country: {
        oid: 25,
        comment: nil,
        db_type: "text",
        default: nil,
        allow_null: false,
        primary_key: false,
        generated: false,
        type: "string",
        ruby_default: nil
      },
      postal: {
        oid: 25,
        comment: nil,
        db_type: "text",
        default: nil,
        allow_null: false,
        primary_key: false,
        generated: false,
        type: "string",
        ruby_default: nil
      },
      region: {
        oid: 25,
        comment: nil,
        db_type: "text",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "string",
        ruby_default: nil
      },
      street_line1: {
        oid: 25,
        comment: nil,
        db_type: "text",
        default: nil,
        allow_null: false,
        primary_key: false,
        generated: false,
        type: "string",
        ruby_default: nil
      },
      street_line2: {
        oid: 25,
        comment: nil,
        db_type: "text",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "string",
        ruby_default: nil
      },
      lt: {
        oid: 701,
        comment: nil,
        db_type: "double precision",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "float",
        ruby_default: nil
      },
      ln: {
        oid: 701,
        comment: nil,
        db_type: "double precision",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "float",
        ruby_default: nil
      },
      created: {
        oid: 1114,
        comment: nil,
        db_type: "timestamp without time zone",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "datetime",
        min_value: "-4713-11-24 00:00:00 UTC",
        max_value: "294276-12-31 23:59:59 UTC",
        ruby_default: nil
      },
      updated: {
        oid: 1114,
        comment: nil,
        db_type: "timestamp without time zone",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "datetime",
        min_value: "-4713-11-24 00:00:00 UTC",
        max_value: "294276-12-31 23:59:59 UTC",
        ruby_default: nil
      }
    },
    foreign_keys: []
  },
  companies: {
    columns: {
      id: {
        oid: 23,
        comment: nil,
        db_type: "integer",
        default: nil,
        allow_null: false,
        primary_key: true,
        generated: false,
        type: "integer",
        auto_increment: true,
        ruby_default: nil,
        min_value: -2147483648,
        max_value: 2147483647
      },
      name: {
        oid: 25,
        comment: nil,
        db_type: "text",
        default: nil,
        allow_null: false,
        primary_key: false,
        generated: false,
        type: "string",
        ruby_default: nil
      },
      email: {
        oid: 25,
        comment: nil,
        db_type: "text",
        default: nil,
        allow_null: false,
        primary_key: false,
        generated: false,
        type: "string",
        ruby_default: nil
      },
      website: {
        oid: 25,
        comment: nil,
        db_type: "text",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "string",
        ruby_default: nil
      },
      evikonce_url: {
        oid: 25,
        comment: nil,
        db_type: "text",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "string",
        ruby_default: nil
      },
      phone: {
        oid: 25,
        comment: nil,
        db_type: "text",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "string",
        ruby_default: nil
      },
      description: {
        oid: 25,
        comment: nil,
        db_type: "text",
        default: nil,
        allow_null: false,
        primary_key: false,
        generated: false,
        type: "string",
        ruby_default: nil
      },
      address_id: {
        oid: 23,
        comment: nil,
        db_type: "integer",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "integer",
        ruby_default: nil,
        min_value: -2147483648,
        max_value: 2147483647
      },
      created: {
        oid: 1114,
        comment: nil,
        db_type: "timestamp without time zone",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "datetime",
        min_value: "-4713-11-24 00:00:00 UTC",
        max_value: "294276-12-31 23:59:59 UTC",
        ruby_default: nil
      },
      updated: {
        oid: 1114,
        comment: nil,
        db_type: "timestamp without time zone",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "datetime",
        min_value: "-4713-11-24 00:00:00 UTC",
        max_value: "294276-12-31 23:59:59 UTC",
        ruby_default: nil
      }
    },
    foreign_keys: [
      {
        name: "companies_address_id_fkey",
        columns: [
          "address_id"
        ],
        references: {
          table: "addresses",
          columns: [
            "id"
          ]
        },
        on_delete: "set_null",
        on_update: "no_action"
      }
    ]
  },
  employees: {
    columns: {
      id: {
        oid: 23,
        comment: nil,
        db_type: "integer",
        default: nil,
        allow_null: false,
        primary_key: true,
        generated: false,
        type: "integer",
        auto_increment: true,
        ruby_default: nil,
        min_value: -2147483648,
        max_value: 2147483647
      },
      first_name: {
        oid: 25,
        comment: nil,
        db_type: "text",
        default: nil,
        allow_null: false,
        primary_key: false,
        generated: false,
        type: "string",
        ruby_default: nil
      },
      last_name: {
        oid: 25,
        comment: nil,
        db_type: "text",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "string",
        ruby_default: nil
      },
      description: {
        oid: 25,
        comment: nil,
        db_type: "text",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "string",
        ruby_default: nil
      },
      email: {
        oid: 25,
        comment: nil,
        db_type: "text",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "string",
        ruby_default: nil
      },
      phone: {
        oid: 25,
        comment: nil,
        db_type: "text",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "string",
        ruby_default: nil
      },
      password_digest: {
        oid: 25,
        comment: nil,
        db_type: "text",
        default: nil,
        allow_null: false,
        primary_key: false,
        generated: false,
        type: "string",
        ruby_default: nil
      },
      role: {
        oid: 23,
        comment: nil,
        db_type: "integer",
        default: "0",
        allow_null: false,
        primary_key: false,
        generated: false,
        type: "integer",
        ruby_default: 0,
        min_value: -2147483648,
        max_value: 2147483647
      },
      created: {
        oid: 1114,
        comment: nil,
        db_type: "timestamp without time zone",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "datetime",
        min_value: "-4713-11-24 00:00:00 UTC",
        max_value: "294276-12-31 23:59:59 UTC",
        ruby_default: nil
      },
      updated: {
        oid: 1114,
        comment: nil,
        db_type: "timestamp without time zone",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "datetime",
        min_value: "-4713-11-24 00:00:00 UTC",
        max_value: "294276-12-31 23:59:59 UTC",
        ruby_default: nil
      },
      company_id: {
        oid: 23,
        comment: nil,
        db_type: "integer",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "integer",
        ruby_default: nil,
        min_value: -2147483648,
        max_value: 2147483647
      },
      image_id: {
        oid: 23,
        comment: nil,
        db_type: "integer",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "integer",
        ruby_default: nil,
        min_value: -2147483648,
        max_value: 2147483647
      }
    },
    foreign_keys: [
      {
        name: "employees_company_id_fkey",
        columns: [
          "company_id"
        ],
        references: {
          table: "companies",
          columns: [
            "id"
          ]
        },
        on_delete: "cascade",
        on_update: "no_action"
      },
      {
        name: "employees_image_id_fkey",
        columns: [
          "image_id"
        ],
        references: {
          table: "images",
          columns: [
            "id"
          ]
        },
        on_delete: "set_null",
        on_update: "no_action"
      }
    ]
  },
  images: {
    columns: {
      id: {
        oid: 23,
        comment: nil,
        db_type: "integer",
        default: nil,
        allow_null: false,
        primary_key: true,
        generated: false,
        type: "integer",
        auto_increment: true,
        ruby_default: nil,
        min_value: -2147483648,
        max_value: 2147483647
      },
      image_data: {
        oid: 3802,
        comment: nil,
        db_type: "jsonb",
        default: nil,
        allow_null: false,
        primary_key: false,
        generated: false,
        type: nil,
        ruby_default: nil
      },
      type: {
        oid: 21,
        comment: nil,
        db_type: "smallint",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "integer",
        ruby_default: nil,
        min_value: -32768,
        max_value: 32767
      },
      created: {
        oid: 1114,
        comment: nil,
        db_type: "timestamp without time zone",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "datetime",
        min_value: "-4713-11-24 00:00:00 UTC",
        max_value: "294276-12-31 23:59:59 UTC",
        ruby_default: nil
      },
      updated: {
        oid: 1114,
        comment: nil,
        db_type: "timestamp without time zone",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "datetime",
        min_value: "-4713-11-24 00:00:00 UTC",
        max_value: "294276-12-31 23:59:59 UTC",
        ruby_default: nil
      }
    },
    foreign_keys: []
  },
  services: {
    columns: {
      id: {
        oid: 23,
        comment: nil,
        db_type: "integer",
        default: nil,
        allow_null: false,
        primary_key: true,
        generated: false,
        type: "integer",
        auto_increment: true,
        ruby_default: nil,
        min_value: -2147483648,
        max_value: 2147483647
      },
      name: {
        oid: 25,
        comment: nil,
        db_type: "text",
        default: nil,
        allow_null: false,
        primary_key: false,
        generated: false,
        type: "string",
        ruby_default: nil
      },
      description: {
        oid: 25,
        comment: nil,
        db_type: "text",
        default: nil,
        allow_null: false,
        primary_key: false,
        generated: false,
        type: "string",
        ruby_default: nil
      },
      price: {
        oid: 1700,
        comment: nil,
        db_type: "numeric",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "decimal",
        ruby_default: nil
      },
      duration: {
        oid: 23,
        comment: nil,
        db_type: "integer",
        default: "0",
        allow_null: false,
        primary_key: false,
        generated: false,
        type: "integer",
        ruby_default: 0,
        min_value: -2147483648,
        max_value: 2147483647
      },
      employee_id: {
        oid: 23,
        comment: nil,
        db_type: "integer",
        default: nil,
        allow_null: false,
        primary_key: false,
        generated: false,
        type: "integer",
        ruby_default: nil,
        min_value: -2147483648,
        max_value: 2147483647
      },
      created: {
        oid: 1114,
        comment: nil,
        db_type: "timestamp without time zone",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "datetime",
        min_value: "-4713-11-24 00:00:00 UTC",
        max_value: "294276-12-31 23:59:59 UTC",
        ruby_default: nil
      },
      updated: {
        oid: 1114,
        comment: nil,
        db_type: "timestamp without time zone",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "datetime",
        min_value: "-4713-11-24 00:00:00 UTC",
        max_value: "294276-12-31 23:59:59 UTC",
        ruby_default: nil
      }
    },
    foreign_keys: [
      {
        name: "services_employee_id_fkey",
        columns: [
          "employee_id"
        ],
        references: {
          table: "employees",
          columns: [
            "id"
          ]
        },
        on_delete: "no_action",
        on_update: "no_action"
      }
    ]
  },
  company_categories: {
    columns: {
      id: {
        oid: 23,
        comment: nil,
        db_type: "integer",
        default: nil,
        allow_null: false,
        primary_key: true,
        generated: false,
        type: "integer",
        auto_increment: true,
        ruby_default: nil,
        min_value: -2147483648,
        max_value: 2147483647
      },
      company_id: {
        oid: 23,
        comment: nil,
        db_type: "integer",
        default: nil,
        allow_null: false,
        primary_key: false,
        generated: false,
        type: "integer",
        ruby_default: nil,
        min_value: -2147483648,
        max_value: 2147483647
      },
      category_id: {
        oid: 23,
        comment: nil,
        db_type: "integer",
        default: nil,
        allow_null: false,
        primary_key: false,
        generated: false,
        type: "integer",
        ruby_default: nil,
        min_value: -2147483648,
        max_value: 2147483647
      },
      created: {
        oid: 1114,
        comment: nil,
        db_type: "timestamp without time zone",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "datetime",
        min_value: "-4713-11-24 00:00:00 UTC",
        max_value: "294276-12-31 23:59:59 UTC",
        ruby_default: nil
      },
      updated: {
        oid: 1114,
        comment: nil,
        db_type: "timestamp without time zone",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "datetime",
        min_value: "-4713-11-24 00:00:00 UTC",
        max_value: "294276-12-31 23:59:59 UTC",
        ruby_default: nil
      }
    },
    foreign_keys: [
      {
        name: "company_categories_category_id_fkey",
        columns: [
          "category_id"
        ],
        references: {
          table: "categories",
          columns: [
            "id"
          ]
        },
        on_delete: "cascade",
        on_update: "no_action"
      },
      {
        name: "company_categories_company_id_fkey",
        columns: [
          "company_id"
        ],
        references: {
          table: "companies",
          columns: [
            "id"
          ]
        },
        on_delete: "cascade",
        on_update: "no_action"
      }
    ]
  },
  categories: {
    columns: {
      id: {
        oid: 23,
        comment: nil,
        db_type: "integer",
        default: nil,
        allow_null: false,
        primary_key: true,
        generated: false,
        type: "integer",
        auto_increment: true,
        ruby_default: nil,
        min_value: -2147483648,
        max_value: 2147483647
      },
      name: {
        oid: 25,
        comment: nil,
        db_type: "text",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "string",
        ruby_default: nil
      },
      created: {
        oid: 1114,
        comment: nil,
        db_type: "timestamp without time zone",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "datetime",
        min_value: "-4713-11-24 00:00:00 UTC",
        max_value: "294276-12-31 23:59:59 UTC",
        ruby_default: nil
      },
      updated: {
        oid: 1114,
        comment: nil,
        db_type: "timestamp without time zone",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "datetime",
        min_value: "-4713-11-24 00:00:00 UTC",
        max_value: "294276-12-31 23:59:59 UTC",
        ruby_default: nil
      }
    },
    foreign_keys: []
  },
  time_slots: {
    columns: {
      id: {
        oid: 23,
        comment: nil,
        db_type: "integer",
        default: nil,
        allow_null: false,
        primary_key: true,
        generated: false,
        type: "integer",
        auto_increment: true,
        ruby_default: nil,
        min_value: -2147483648,
        max_value: 2147483647
      },
      start_time: {
        oid: 1114,
        comment: nil,
        db_type: "timestamp without time zone",
        default: nil,
        allow_null: false,
        primary_key: false,
        generated: false,
        type: "datetime",
        min_value: "-4713-11-24 00:00:00 UTC",
        max_value: "294276-12-31 23:59:59 UTC",
        ruby_default: nil
      },
      end_time: {
        oid: 1114,
        comment: nil,
        db_type: "timestamp without time zone",
        default: nil,
        allow_null: false,
        primary_key: false,
        generated: false,
        type: "datetime",
        min_value: "-4713-11-24 00:00:00 UTC",
        max_value: "294276-12-31 23:59:59 UTC",
        ruby_default: nil
      },
      day: {
        oid: 1082,
        comment: nil,
        db_type: "date",
        default: nil,
        allow_null: false,
        primary_key: false,
        generated: false,
        type: "date",
        min_value: "-4713-11-24",
        max_value: "5874897-12-31",
        ruby_default: nil
      },
      state: {
        oid: 23,
        comment: nil,
        db_type: "integer",
        default: "0",
        allow_null: false,
        primary_key: false,
        generated: false,
        type: "integer",
        ruby_default: 0,
        min_value: -2147483648,
        max_value: 2147483647
      },
      price: {
        oid: 1700,
        comment: nil,
        db_type: "numeric",
        default: "0",
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "decimal",
        ruby_default: "0.0"
      },
      created: {
        oid: 1114,
        comment: nil,
        db_type: "timestamp without time zone",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "datetime",
        min_value: "-4713-11-24 00:00:00 UTC",
        max_value: "294276-12-31 23:59:59 UTC",
        ruby_default: nil
      },
      updated: {
        oid: 1114,
        comment: nil,
        db_type: "timestamp without time zone",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "datetime",
        min_value: "-4713-11-24 00:00:00 UTC",
        max_value: "294276-12-31 23:59:59 UTC",
        ruby_default: nil
      },
      employee_id: {
        oid: 23,
        comment: nil,
        db_type: "integer",
        default: nil,
        allow_null: false,
        primary_key: false,
        generated: false,
        type: "integer",
        ruby_default: nil,
        min_value: -2147483648,
        max_value: 2147483647
      },
      client_id: {
        oid: 23,
        comment: nil,
        db_type: "integer",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "integer",
        ruby_default: nil,
        min_value: -2147483648,
        max_value: 2147483647
      },
      company_id: {
        oid: 23,
        comment: nil,
        db_type: "integer",
        default: nil,
        allow_null: false,
        primary_key: false,
        generated: false,
        type: "integer",
        ruby_default: nil,
        min_value: -2147483648,
        max_value: 2147483647
      },
      service_id: {
        oid: 23,
        comment: nil,
        db_type: "integer",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "integer",
        ruby_default: nil,
        min_value: -2147483648,
        max_value: 2147483647
      }
    },
    foreign_keys: [
      {
        name: "time_slots_client_id_fkey",
        columns: [
          "client_id"
        ],
        references: {
          table: "clients",
          columns: [
            "id"
          ]
        },
        on_delete: "cascade",
        on_update: "no_action"
      },
      {
        name: "time_slots_company_id_fkey",
        columns: [
          "company_id"
        ],
        references: {
          table: "companies",
          columns: [
            "id"
          ]
        },
        on_delete: "cascade",
        on_update: "no_action"
      },
      {
        name: "time_slots_employee_id_fkey",
        columns: [
          "employee_id"
        ],
        references: {
          table: "employees",
          columns: [
            "id"
          ]
        },
        on_delete: "cascade",
        on_update: "no_action"
      },
      {
        name: "time_slots_service_id_fkey",
        columns: [
          "service_id"
        ],
        references: {
          table: "services",
          columns: [
            "id"
          ]
        },
        on_delete: "cascade",
        on_update: "no_action"
      }
    ]
  },
  clients: {
    columns: {
      id: {
        oid: 23,
        comment: nil,
        db_type: "integer",
        default: nil,
        allow_null: false,
        primary_key: true,
        generated: false,
        type: "integer",
        auto_increment: true,
        ruby_default: nil,
        min_value: -2147483648,
        max_value: 2147483647
      },
      first_name: {
        oid: 25,
        comment: nil,
        db_type: "text",
        default: nil,
        allow_null: false,
        primary_key: false,
        generated: false,
        type: "string",
        ruby_default: nil
      },
      last_name: {
        oid: 25,
        comment: nil,
        db_type: "text",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "string",
        ruby_default: nil
      },
      email: {
        oid: 25,
        comment: nil,
        db_type: "text",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "string",
        ruby_default: nil
      },
      phone: {
        oid: 25,
        comment: nil,
        db_type: "text",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "string",
        ruby_default: nil
      },
      password_digest: {
        oid: 25,
        comment: nil,
        db_type: "text",
        default: nil,
        allow_null: false,
        primary_key: false,
        generated: false,
        type: "string",
        ruby_default: nil
      },
      created: {
        oid: 1114,
        comment: nil,
        db_type: "timestamp without time zone",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "datetime",
        min_value: "-4713-11-24 00:00:00 UTC",
        max_value: "294276-12-31 23:59:59 UTC",
        ruby_default: nil
      },
      updated: {
        oid: 1114,
        comment: nil,
        db_type: "timestamp without time zone",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "datetime",
        min_value: "-4713-11-24 00:00:00 UTC",
        max_value: "294276-12-31 23:59:59 UTC",
        ruby_default: nil
      },
      address_id: {
        oid: 23,
        comment: nil,
        db_type: "integer",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "integer",
        ruby_default: nil,
        min_value: -2147483648,
        max_value: 2147483647
      },
      company_id: {
        oid: 23,
        comment: nil,
        db_type: "integer",
        default: nil,
        allow_null: false,
        primary_key: false,
        generated: false,
        type: "integer",
        ruby_default: nil,
        min_value: -2147483648,
        max_value: 2147483647
      }
    },
    foreign_keys: [
      {
        name: "clients_address_id_fkey",
        columns: [
          "address_id"
        ],
        references: {
          table: "addresses",
          columns: [
            "id"
          ]
        },
        on_delete: "no_action",
        on_update: "no_action"
      },
      {
        name: "clients_company_id_fkey",
        columns: [
          "company_id"
        ],
        references: {
          table: "companies",
          columns: [
            "id"
          ]
        },
        on_delete: "cascade",
        on_update: "no_action"
      }
    ]
  },
  company_images: {
    columns: {
      id: {
        oid: 23,
        comment: nil,
        db_type: "integer",
        default: nil,
        allow_null: false,
        primary_key: true,
        generated: false,
        type: "integer",
        auto_increment: true,
        ruby_default: nil,
        min_value: -2147483648,
        max_value: 2147483647
      },
      company_id: {
        oid: 23,
        comment: nil,
        db_type: "integer",
        default: nil,
        allow_null: false,
        primary_key: false,
        generated: false,
        type: "integer",
        ruby_default: nil,
        min_value: -2147483648,
        max_value: 2147483647
      },
      image_id: {
        oid: 23,
        comment: nil,
        db_type: "integer",
        default: nil,
        allow_null: false,
        primary_key: false,
        generated: false,
        type: "integer",
        ruby_default: nil,
        min_value: -2147483648,
        max_value: 2147483647
      },
      created: {
        oid: 1114,
        comment: nil,
        db_type: "timestamp without time zone",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "datetime",
        min_value: "-4713-11-24 00:00:00 UTC",
        max_value: "294276-12-31 23:59:59 UTC",
        ruby_default: nil
      },
      updated: {
        oid: 1114,
        comment: nil,
        db_type: "timestamp without time zone",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "datetime",
        min_value: "-4713-11-24 00:00:00 UTC",
        max_value: "294276-12-31 23:59:59 UTC",
        ruby_default: nil
      }
    },
    foreign_keys: [
      {
        name: "company_images_company_id_fkey",
        columns: [
          "company_id"
        ],
        references: {
          table: "companies",
          columns: [
            "id"
          ]
        },
        on_delete: "cascade",
        on_update: "no_action"
      },
      {
        name: "company_images_image_id_fkey",
        columns: [
          "image_id"
        ],
        references: {
          table: "images",
          columns: [
            "id"
          ]
        },
        on_delete: "cascade",
        on_update: "no_action"
      }
    ]
  },
  windows: {
    columns: {
      id: {
        oid: 23,
        comment: nil,
        db_type: "integer",
        default: nil,
        allow_null: false,
        primary_key: true,
        generated: false,
        type: "integer",
        auto_increment: true,
        ruby_default: nil,
        min_value: -2147483648,
        max_value: 2147483647
      },
      start_time: {
        oid: 1114,
        comment: nil,
        db_type: "timestamp without time zone",
        default: nil,
        allow_null: false,
        primary_key: false,
        generated: false,
        type: "datetime",
        min_value: "-4713-11-24 00:00:00 UTC",
        max_value: "294276-12-31 23:59:59 UTC",
        ruby_default: nil
      },
      end_time: {
        oid: 1114,
        comment: nil,
        db_type: "timestamp without time zone",
        default: nil,
        allow_null: false,
        primary_key: false,
        generated: false,
        type: "datetime",
        min_value: "-4713-11-24 00:00:00 UTC",
        max_value: "294276-12-31 23:59:59 UTC",
        ruby_default: nil
      },
      break_from: {
        oid: 1114,
        comment: nil,
        db_type: "timestamp without time zone",
        default: nil,
        allow_null: false,
        primary_key: false,
        generated: false,
        type: "datetime",
        min_value: "-4713-11-24 00:00:00 UTC",
        max_value: "294276-12-31 23:59:59 UTC",
        ruby_default: nil
      },
      break_to: {
        oid: 1114,
        comment: nil,
        db_type: "timestamp without time zone",
        default: nil,
        allow_null: false,
        primary_key: false,
        generated: false,
        type: "datetime",
        min_value: "-4713-11-24 00:00:00 UTC",
        max_value: "294276-12-31 23:59:59 UTC",
        ruby_default: nil
      },
      effective_date: {
        oid: 1082,
        comment: nil,
        db_type: "date",
        default: nil,
        allow_null: false,
        primary_key: false,
        generated: false,
        type: "date",
        min_value: "-4713-11-24",
        max_value: "5874897-12-31",
        ruby_default: nil
      },
      end_date: {
        oid: 1082,
        comment: nil,
        db_type: "date",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "date",
        min_value: "-4713-11-24",
        max_value: "5874897-12-31",
        ruby_default: nil
      },
      employee_id: {
        oid: 23,
        comment: nil,
        db_type: "integer",
        default: nil,
        allow_null: false,
        primary_key: false,
        generated: false,
        type: "integer",
        ruby_default: nil,
        min_value: -2147483648,
        max_value: 2147483647
      },
      weekends: {
        oid: 1005,
        comment: nil,
        db_type: "smallint[]",
        default: "'{}'::smallint[]",
        allow_null: false,
        primary_key: false,
        typtype: "b",
        generated: false,
        type: "smallint_array",
        ruby_default: nil,
        callable_default: "#<Proc:0x0000000108f00e48 /Users/oleg/.rbenv/versions/3.4.1/lib/ruby/gems/3.4.0/gems/sequel-5.103.0/lib/sequel/extensions/pg_array.rb:284 (lambda)>"
      },
      created: {
        oid: 1114,
        comment: nil,
        db_type: "timestamp without time zone",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "datetime",
        min_value: "-4713-11-24 00:00:00 UTC",
        max_value: "294276-12-31 23:59:59 UTC",
        ruby_default: nil
      },
      updated: {
        oid: 1114,
        comment: nil,
        db_type: "timestamp without time zone",
        default: nil,
        allow_null: true,
        primary_key: false,
        generated: false,
        type: "datetime",
        min_value: "-4713-11-24 00:00:00 UTC",
        max_value: "294276-12-31 23:59:59 UTC",
        ruby_default: nil
      }
    },
    foreign_keys: [
      {
        name: "windows_employee_id_fkey",
        columns: [
          "employee_id"
        ],
        references: {
          table: "employees",
          columns: [
            "id"
          ]
        },
        on_delete: "cascade",
        on_update: "no_action"
      }
    ]
  }
}
