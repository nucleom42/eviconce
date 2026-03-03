import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BookingScheduler from "./pages/BookingScheduler";
import "./CompanyWebsite.css";

export default function CompanyWebsite() {
  const { companyName } = useParams();
  const [company, setCompany] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [activeTab, setActiveTab] = useState("services");
  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/companies/${companyName}`);

        if (!response.ok) {
          throw new Error("Company not found");
        }

        const data = await response.json();
        setCompany(data.company);
        setEmployees(data.employees);
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

  const handleBookService = (service) => {
    setSelectedService(service);
    setShowBooking(true);
  };

  const handleCloseBooking = () => {
    setShowBooking(false);
    setSelectedService(null);
  };

  const handleBookingComplete = () => {
    setShowBooking(false);
    setSelectedService(null);
    // Show success message
    alert("Запис успішно створено!");
  };

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

  const allServices =
    employees?.flatMap(
      (employee) =>
        employee.services?.map((service) => ({
          ...service,
          employee: employee,
        })) || [],
    ) || [];

  const formatPrice = (price) => {
    if (!price) return "0";
    const num = parseFloat(price);
    return num.toFixed(0);
  };

  const displayImages = company.images ? company.images.slice(0, 3) : [];

  return (
    <div className="company-website">
      {/* Header */}
      <header className="site-header">
        <div className="header-container">
          <div className="logo-section">
            {company.logo && (
              <img
                src={"/images" + company.logo}
                alt={company.name}
                className="header-logo"
              />
            )}
            <h1>{company.name}</h1>
          </div>
          <button className="book-now-btn">Записатися</button>
        </div>
      </header>

      {/* Image Banner */}
      {displayImages.length > 0 && (
        <section className="image-banner">
          <div className="image-banner-container">
            {displayImages.map((url, index) => (
              <div key={index} className="banner-image-wrapper">
                <img
                  src={"/images" + url}
                  alt={`${company.name} - фото ${index + 1}`}
                  className="banner-image"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Navigation Tabs */}
      <nav className="tab-navigation">
        <div className="tab-container">
          <button
            className={`tab-btn ${activeTab === "services" ? "active" : ""}`}
            onClick={() => setActiveTab("services")}
          >
            Послуги
          </button>
          <button
            className={`tab-btn ${activeTab === "team" ? "active" : ""}`}
            onClick={() => setActiveTab("team")}
          >
            Команда
          </button>
          <button
            className={`tab-btn ${activeTab === "about" ? "active" : ""}`}
            onClick={() => setActiveTab("about")}
          >
            Про нас
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-container">
          {/* Services Tab */}
          {activeTab === "services" && (
            <section className="services-content">
              <h2>Послуги</h2>

              {allServices.length > 0 ? (
                <div className="service-list">
                  {allServices.map((service, index) => (
                    <div key={index} className="service-item">
                      <div className="service-info">
                        <h3 className="service-name">{service.name}</h3>
                        <p className="service-description">
                          {service.description}
                        </p>
                        <div className="service-meta">
                          <span className="service-duration">
                            {service.duration} хв
                          </span>
                          <span className="service-provider">
                            з {service.employee.first_name}{" "}
                            {service.employee.last_name}
                          </span>
                        </div>
                      </div>
                      <div className="service-booking">
                        <div className="service-price">
                          {formatPrice(service.price)} грн
                        </div>
                        <button
                          className="book-service-btn"
                          onClick={() => handleBookService(service)}
                        >
                          Записатися
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="empty-message">Наразі немає доступних послуг</p>
              )}
            </section>
          )}

          {/* Team Tab */}
          {activeTab === "team" && (
            <section className="team-content">
              <h2>Наша команда</h2>

              {employees.length > 0 ? (
                <div className="team-list">
                  {employees.map((employee) => (
                    <div key={employee.id} className="team-item">
                      <div className="team-member-info">
                        <div className="member-photo">
                          {employee.photo ? (
                            <img
                              src={employee.photo}
                              alt={`${employee.first_name} ${employee.last_name}`}
                            />
                          ) : (
                            <div className="photo-placeholder">
                              {employee.first_name[0]}
                              {employee.last_name[0]}
                            </div>
                          )}
                        </div>
                        <div className="member-details">
                          <h3>
                            {employee.first_name} {employee.last_name}
                          </h3>
                          {employee.description && (
                            <p className="member-bio">{employee.description}</p>
                          )}
                          {employee.services &&
                            employee.services.length > 0 && (
                              <div className="member-services-list">
                                <p className="services-label">Спеціалізація:</p>
                                <ul>
                                  {employee.services.map((service, idx) => (
                                    <li key={idx}>{service.name}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="empty-message">Інформація про команду відсутня</p>
              )}
            </section>
          )}

          {/* About Tab */}
          {activeTab === "about" && (
            <section className="about-content">
              <h2>Про нас</h2>

              <div className="about-details">
                <div className="about-description">
                  <h3>Опис</h3>
                  <p>
                    {company.description ||
                      "Ласкаво просимо до нашої компанії!"}
                  </p>
                </div>

                <div className="contact-details">
                  <h3>Контактна інформація</h3>

                  {company.address && (
                    <div className="contact-row">
                      <span className="contact-label">Адреса</span>
                      <span className="contact-value">
                        {company.address.street_line1}
                        {company.address.street_line2 &&
                          `, ${company.address.street_line2}`}
                        <br />
                        {company.address.city}, {company.address.region}{" "}
                        {company.address.postal}
                      </span>
                    </div>
                  )}

                  {company.phone && (
                    <div className="contact-row">
                      <span className="contact-label">Телефон</span>
                      <span className="contact-value">
                        <a href={`tel:${company.phone}`}>{company.phone}</a>
                      </span>
                    </div>
                  )}

                  {company.email && (
                    <div className="contact-row">
                      <span className="contact-label">Email</span>
                      <span className="contact-value">
                        <a href={`mailto:${company.email}`}>{company.email}</a>
                      </span>
                    </div>
                  )}

                  {company.website && (
                    <div className="contact-row">
                      <span className="contact-label">Веб-сайт</span>
                      <span className="contact-value">
                        <a
                          href={company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {company.website}{" "}
                        </a>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <p>
            &copy; {new Date().getFullYear()} {company.name}. Всі права
            захищено.
          </p>
        </div>
      </footer>

      {/* Booking Scheduler Modal */}
      {showBooking && selectedService && (
        <BookingScheduler
          service={selectedService}
          onClose={handleCloseBooking}
          onComplete={handleBookingComplete}
          company_id={company.id}
        />
      )}
    </div>
  );
}
