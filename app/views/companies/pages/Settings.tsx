import React from 'react';
import './../styles/Settings.css';

export default function Settings({ dashboardData }) {
  return (
    <div className="company-container">
      <div className="company-header">
        <h2>Тарифний план</h2>
      </div>

      <div className="company-details">
        {/* Free Tier */}
        <div className="company-section highlight-free">
          <h3>Безкоштовний тариф</h3>
          <div className="detail-grid">
            <div className="detail-item">
              <label>Вартість</label>
              <span>0 грн — Назавжди</span>
            </div>
            <div className="detail-item">
              <label>Сайт компанії</label>
              <span>З вашим логотипом та функцію бронювання</span>
            </div>
            <div className="detail-item">
              <label>Сповіщення</label>
              <span>Базові сповіщення через електронну пошту</span>
            </div>
            <div className="detail-item">
              <label>Обмеження</label>
              <span>До 2 співробітників</span>
            </div>
            <div className="detail-item full-width">
              <label>Обсяг записів</label>
              <span>50 бронювань на кожного майстра щомісяця</span>
            </div>
            
          </div>
        </div>

        {/* Paid Tier */}
        <div className="company-section">
          <h3>Масштабування</h3>
          <div className="detail-grid">
            <div className="detail-item">
              <label>Ціна</label>
              <span>$2.50 / місяць (≈ 99 грн)</span>
            </div>
            <div className="detail-item">
              <label>Можливості</label>
              <span>Безлімітні записи та до 50 співробітників</span>
            </div>
            <div className="detail-item full-width">
              <label>Умова</label>
              <span>Ви платите лише тоді, коли ваш бізнес реально зростає</span>
            </div>
          </div>
        </div>

        {/* Add-ons */}
        <div className="company-section">
          <h3>Додаткові модулі в розробці</h3>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>
            Активуйте лише ті функції, які вам потрібні:
          </p>
          <div className="detail-grid">
            <div className="detail-item">
              <label>Сповіщення</label>
              <span>SMS та Telegram для клієнтів</span>
            </div>
            <div className="detail-item">
              <label>Аналітика</label>
              <span>Експорт бази клієнтів у CSV</span>
            </div>
            <div className="detail-item">
              <label>Інтелект</label>
              <span>AI-асистент для записів</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
