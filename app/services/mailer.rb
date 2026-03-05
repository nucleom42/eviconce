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

    # Send booking confirmation
    def booking_confirmation(to:, client_name:, service:, time_slot:)
      Mail.deliver do
        from     ENV.fetch('FROM_EMAIL', 'noreply@yourdomain.com')
        to       to
        subject  "Підтвердження запису"

        html_part do
          content_type 'text/html; charset=UTF-8'
          body booking_html(client_name, service, time_slot)
        end

        text_part do
          body booking_text(client_name, service, time_slot)
        end
      end
    end

    private

    def booking_html(name, service, slot)
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
              <h1>Ваш запис підтверджено!</h1>
            </div>
            <div class="content">
              <p>Доброго дня, #{name}!</p>

              <div class="detail">
                <span class="label">Послуга:</span> #{service.name}
              </div>
              <div class="detail">
                <span class="label">Дата:</span> #{slot.day}
              </div>
              <div class="detail">
                <span class="label">Час:</span> #{slot.start_time.strftime('%H:%M')}
              </div>
              <div class="detail">
                <span class="label">Ціна:</span> #{service.price} грн
              </div>

              <p>Дякуємо за ваш запис!</p>
            </div>
          </div>
        </body>
        </html>
      HTML
    end

    def booking_text(name, service, slot)
      <<~TEXT
        Ваш запис підтверджено!

        Доброго дня, #{name}!

        Послуга: #{service.name}
        Дата: #{slot.day}
        Час: #{slot.start_time.strftime('%H:%M')}
        Ціна: #{service.price} грн

        Дякуємо за ваш запис!
      TEXT
    end
  end
end

