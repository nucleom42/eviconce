class Mailer
  class << self
    def setup!
      config = smtp_config
      Mail.defaults do
        delivery_method :smtp, config
      end
    end

    def smtp_config
      {
        address: ENV['SMTP_HOST'],
        port: ENV.fetch('SMTP_PORT', 587).to_i,
        user_name: ENV['SMTP_USER'],
        password: ENV['SMTP_PASSWORD'],
        authentication: 'plain',
        enable_starttls_auto: true,
      }
    end

    def welcome_employee(args = {})
      employee = Employee.find args[:employee_id]
      html_content = employee_welcome_html(employee.first_name, employee.email, employee.password)
      text_content = employee_welcome_text(employee.first_name, employee.email, employee.password)

      Mail.deliver do
        from     ENV.fetch('FROM_EMAIL', "noreply@#{Domain.base_url}")
        to       employee.email
        subject  "Дякуємо за реєстрацію"
        html_part do
          content_type 'text/html; charset=UTF-8'
          body html_content
        end
        text_part do
          body text_content
        end
      end
    end

    # Send booking confirmation
    def booking_confirmation(args = {})
      client_name = args[:client_name]
      to = args[:to]
      service = Service.find args[:service_id]
      time_slot = args[:time_slot]
      changed = args[:changed]
      deleted = args[:deleted]
      # Generate content outside the Mail.deliver block
      html_content = booking_html(client_name, service, time_slot, changed, deleted)
      text_content = booking_text(client_name, service, time_slot, changed, deleted)
      subject = changed ? 'Зміна запису' : 'Підтвердження запису'
      subject = 'Видалення запису' if deleted

      Mail.deliver do
        from     ENV.fetch('FROM_EMAIL', 'noreply@yourdomain.com')
        to       to
        subject  subject
        html_part do
          content_type 'text/html; charset=UTF-8'
          body html_content
        end
        text_part do
          body text_content
        end
      end
    end

    private

    def employee_welcome_html(name, email, password)
      <<~HTML
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #4a90e2; color: white; padding: 20px; text-align: center; }
            .content { background: #f9f9f9; padding: 20px; }
            .detail { margin: 10px 0; }
            .label { font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">.
            <div class="header">.
              <h1>Вітаємо, #{name}!</h1.>
            </div>
            <div class="content">
              <p>Дякуємо за реєстрацію на Є Віконце!</p>
              <a href="#{Domain.base_url}/companies/welcome">Перейти</a>
              <p>Ваш обліковий запис:</p>
              <div class="detail">
                <span class="label">Логін:</span> #{email}
              </div>
              <div class="detail">
                <span class="label">Пароль:</span> #{password}
              </div>
            </div>
          </div>
        </body>
        </html>
      HTML
    end

    def booking_html(name, service, slot, changed, deleted)
      action = changed ? 'змінено' : 'підтверджено'
      action = 'видалено' if deleted

      cancel_link = unless deleted
        <<~LINK
          <div class="detail">
            <span class="label">
              <a href="#{Domain.delete_time_slot_url(TimeSlot.find(slot[:id]))}">Відмінити</a>
            </span>
          </div>
        LINK
      end

      <<~HTML
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #4a90e2; color: white; padding: 20px; text-align: center; }
            .content { background: #f9f9f9; padding: 20px; }
            .detail { margin: 10px 0; }
            .label { font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Ваш запис #{action}!</h1>
            </div>
            <div class="content">
              <p>Доброго дня, #{name}!</p>
              <div class="detail">
                <span class="label">Послуга:</span> #{service.name}
              </div>
              <div class="detail">
                <span class="label">Дата:</span> #{slot[:day]}
              </div>
              <div class="detail">
                <span class="label">Час:</span> #{Time.parse(slot[:start_time]).strftime('%H:%M')}
              </div>
              <div class="detail">
                <span class="label">Ціна:</span> #{service.price.to_f} грн
              </div>
              #{cancel_link}
              <p>Дякуємо!</p>
            </div>
          </div>
        </body>
        </html>
      HTML
    end

    def employee_welcome_text(name, email, password)
      <<~TEXT
        Вітаємо, #{name}!
        Дякуємо за реєстрацію!

        Логін: #{email}
        Пароль: #{password}
      TEXT
    end

    def booking_text(name, service, slot, changed, deleted)
      action = changed ? 'змінено' : 'підтверджено'
      action = 'видалено' if deleted
      cancel_link = unless deleted
        <<~TEXT
          <a href="#{Domain.delete_time_slot_url(TimeSlot.find(slot[:id]))}">Відмінити</a>
        TEXT
      end
      <<~TEXT
        Ваш запис #{action}!

        Доброго дня, #{name}!

        Послуга: #{service.name}
        Дата: #{slot[:day]}
        Час: #{Time.parse(slot[:start_time]).strftime('%H:%M')}
        Ціна: #{service.price.to_f} грн

        #{cancel_link}

        Дякуємо!
      TEXT
    end
  end
end
