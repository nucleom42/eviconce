import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CompanyWebsite.css';

export default function CompanyWebsite() {
  const { companyName } = useParams(); // Get company name from URL
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/companies/${companyName}`);

        if (!response.ok) {
          throw new Error('Company not found');
        }

        const data = await response.json();
        setCompany(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (companyName) {
      fetchCompany();
    }
  }, [companyName]);

  if (loading) {
    return (
      <div className="website-loading">
        <div className="spinner"></div>
        <p>Завантаження...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="website-error">
        <h2>😔 Компанію не знайдено</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (!company) {
    return null;
  }

  return (
    <div className="company-website">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            {company.logo && (
              <img src={company.logo} alt={company.name} className="company-logo" />
            )}
            <h1 className="company-name">{company.name}</h1>
            {company.tagline && <p className="tagline">{company.tagline}</p>}
            <button className="cta-button" onClick={() => {
              document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
            }}>
              Переглянути послуги
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2>Про нас</h2>
          <p className="about-description">{company.description || 'Ласкаво просимо до нашої компанії!'}</p>

          {company.address && (
            <div className="contact-info">
              <div className="contact-item">
                <span className="icon">📍</span>
                <div>
                  <strong>Адреса:</strong>
                  <p>
                    {company.address.street_line1}
                    {company.address.street_line2 && `, ${company.address.street_line2}`}
                    <br />
                    {company.address.city}, {company.address.region} {company.address.postal}
                    <br />
                    {company.address.country}
                  </p>
                </div>
              </div>

              {company.phone && (
                <div className="contact-item">
                  <span className="icon">📞</span>
                  <div>
                    <strong>Телефон:</strong>
                    <p><a href={`tel:${company.phone}`}>{company.phone}</a></p>
                  </div>
                </div>
              )}

              {company.email && (
                <div className="contact-item">
                  <span className="icon">✉️</span>
                  <div>
                    <strong>Email:</strong>
                    <p><a href={`mailto:${company.email}`}>{company.email}</a></p>
                  </div>
                </div>
              )}

              {company.website && (
                <div className="contact-item">
                  <span className="icon">🌐</span>
                  <div>
                    <strong>Веб-сайт:</strong>
                    <p><a href={company.website} target="_blank" rel="noopener noreferrer">{company.website}</a></p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Gallery Section */}
      {company.photos && company.photos.length > 0 && (
        <section id="gallery" className="gallery-section">
          <div className="container">
            <h2>Галерея</h2>
            <div className="photo-grid">
              {company.photos.map((photo, index) => (
                <div key={index} className="photo-item">
                  <img src={photo.url} alt={photo.caption || `Photo ${index + 1}`} />
                  {photo.caption && <p className="photo-caption">{photo.caption}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <h2>Наші послуги</h2>
          {company.employees && company.employees.length > 0 ? (
            <div className="services-grid">
              {company.employees.flatMap(employee =>
                employee.services?.map(service => ({
                  ...service,
                  employeeName: `${employee.first_name} ${employee.last_name}`
                })) || []
              ).map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-header">
                    <h3>{service.name}</h3>
                    <span className="service-price">{service.price} грн</span>
                  </div>
                  <p className="service-description">{service.description}</p>
                  <div className="service-footer">
                    <span className="service-duration">⏱️ {service.duration} хв</span>
                    <span className="service-provider">👤 {service.employeeName}</span>
                  </div>
                  <button
                    className="book-button"
                    onClick={() => setSelectedService(service)}
                  >
                    Записатися
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-services">Наразі немає доступних послуг</p>
          )}
        </div>
      </section>

      {/* Team Section */}
      {company.employees && company.employees.length > 0 && (
        <section id="team" className="team-section">
          <div className="container">
            <h2>Наша команда</h2>
            <div className="team-grid">
              {company.employees.map((employee) => (
                <div key={employee.id} className="team-member">
                  <div className="member-avatar">
                    {employee.photo ? (
                      <img src={employee.photo} alt={`${employee.first_name} ${employee.last_name}`} />
                    ) : (
                      <div className="avatar-placeholder">
                        {employee.first_name[0]}{employee.last_name[0]}
                      </div>
                    )}
                  </div>
                  <h3>{employee.first_name} {employee.last_name}</h3>
                  {employee.description && <p className="member-bio">{employee.description}</p>}
                  {employee.services && employee.services.length > 0 && (
                    <div className="member-services">
                      <strong>Послуги:</strong>
                      <ul>
                        {employee.services.map((service, idx) => (
                          <li key={idx}>{service.name}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="website-footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} {company.name}. Всі права захищено.</p>
        </div>
      </footer>

      {/* Booking Modal Placeholder */}
      {selectedService && (
        <div className="booking-modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="booking-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Записатися на {selectedService.name}</h3>
            <p>Функціонал бронювання буде доданий наступним кроком</p>
            <button onClick={() => setSelectedService(null)}>Закрити</button>
          </div>
        </div>
      )}
    </div>
  );
}
