import React, { useState } from 'react';
import CompanyForm from './CompanyForm';
import './../styles/Company.css';

export default function Company({ dashboardData }) {
  const [company, setCompany] = useState(dashboardData?.company || null);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // Open edit modal
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Handle save from form
  const handleSave = (savedCompany) => {
    setCompany(savedCompany);
    setIsEditing(false);
    setSuccessMessage("Компанію успішно оновлено");
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  // Close modal
  const handleCancel = () => {
    setIsEditing(false);
  };

  if (!company) {
    return (
      <div className="company-container">
        <div className="empty-state">
          <p>Компанія не знайдена</p>
        </div>
      </div>
    );
  }

  return (
    <div className="company-container">
      <div className="company-header">
        <h2>Компанія</h2>
        <button className="btn-primary" onClick={handleEdit}>
          ✏️ Редагувати
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}

      <div className="company-details">
        <section className="company-section">
          <h3>Основна інформація</h3>
          <div className="detail-grid">
            <div className="detail-item">
              <label>Назва:</label>
              <span>{company.name}</span>
            </div>
            <div className="detail-item">
              <label>Email:</label>
              <span>{company.email || 'N/A'}</span>
            </div>
            <div className="detail-item">
              <label>Телефон:</label>
              <span>{company.phone || 'N/A'}</span>
            </div>
            <div className="detail-item">
              <label>Веб-сайт:</label>
              <span>
                {company.website ? (
                  <a href={company.website} target="_blank" rel="noopener noreferrer">
                    {company.website}
                  </a>
                ) : 'N/A'}
              </span>
            </div>
            <div className="detail-item full-width">
              <label>Опис:</label>
              <span>{company.description || 'N/A'}</span>
            </div>
          </div>
        </section>

        {company.address && (
          <section className="company-section">
            <h3>Адреса</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <label>Вулиця 1:</label>
                <span>{company.address.street_line1 || 'N/A'}</span>
              </div>
              <div className="detail-item">
                <label>Вулиця 2:</label>
                <span>{company.address.street_line2 || 'N/A'}</span>
              </div>
              <div className="detail-item">
                <label>Місто:</label>
                <span>{company.address.city || 'N/A'}</span>
              </div>
              <div className="detail-item">
                <label>Область:</label>
                <span>{company.address.region || 'N/A'}</span>
              </div>
              <div className="detail-item">
                <label>Поштовий індекс:</label>
                <span>{company.address.postal || 'N/A'}</span>
              </div>
              <div className="detail-item">
                <label>Країна:</label>
                <span>{company.address.country || 'N/A'}</span>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <div className="modal-overlay" onClick={handleCancel}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <CompanyForm
              company={company}
              onSave={handleSave}
              onCancel={handleCancel}
              isModal={true}
            />
          </div>
        </div>
      )}
    </div>
  );
}
