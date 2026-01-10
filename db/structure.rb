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
        on_delete: "cascade",
        on_update: "no_action"
      }
    ]
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
        on_delete: "cascade",
        on_update: "no_action"
      }
    ]
  },
  company_clients: {
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
      client_id: {
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
        name: "company_clients_client_id_fkey",
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
        name: "company_clients_company_id_fkey",
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
      }
    },
    foreign_keys: []
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
        callable_default: "#<Proc:0x000000012b6f3728 /Users/oleg/.rbenv/versions/3.4.1/lib/ruby/gems/3.4.0/gems/sequel-5.100.0/lib/sequel/extensions/pg_array.rb:284 (lambda)>"
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
  company_employees: {
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
        name: "company_employees_company_id_fkey",
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
        name: "company_employees_employee_id_fkey",
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
  },
  employee_windows: {
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
      window_id: {
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
        name: "employee_windows_employee_id_fkey",
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
        name: "employee_windows_window_id_fkey",
        columns: [
          "window_id"
        ],
        references: {
          table: "windows",
          columns: [
            "id"
          ]
        },
        on_delete: "cascade",
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
  }
}
