import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./css/Welcome.css";

export default function Welcome() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [city, setCity] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  // Format company name for URL: "My Company" -> "my-company"
  const formatCompanyUrl = (name) => {
    return name.toLowerCase().replace(/\s+/g, '-');
  };

  // Search function - only called on submit
  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchTerm && !category && !city) {
      setResults([]);
      setShowResults(false);
      return;
    }

    setIsLoading(true);
    setShowResults(true);

    try {
      const params = new URLSearchParams();
      if (searchTerm) params.append('params[name]', searchTerm);
      if (category) params.append('params[category]', category);
      if (city) params.append('params[city]', city);

      const response = await fetch(`/api/companies?${params}`);
      const data = await response.json();
      setResults(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Search error:', error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle clicking on a result
  const handleResultClick = (company) => {
    setShowResults(false);
    setResults([]);
    navigate(`/w/${formatCompanyUrl(company.name)}`);
  };

  // Close results when clicking outside
  const handleClickOutside = () => {
    setShowResults(false);
  };

  return (
    <div className="welcome" onClick={handleClickOutside}>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">Є віконце</h1>
          <p className="hero__subtitle">
            Знайдіть та забронюйте послуги краси та здоров'я поблизу
          </p>

          {/* Search Bar */}
          <form className="search-bar" onSubmit={handleSearch} onClick={(e) => e.stopPropagation()}>
            <div className="search-bar__wrapper">
              {/* Service/Business Name Input */}
              <div className="search-bar__field search-bar__field--main">
                <svg className="search-bar__icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <input
                  type="text"
                  className="search-bar__input"
                  placeholder="Послуга, бізнес або майстер"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Category Dropdown */}
              <div className="search-bar__field">
                <select
                  className="search-bar__select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Всі категорії</option>
                  <option value="hair">Перукарня</option>
                  <option value="nails">Манікюр</option>
                  <option value="spa">СПА</option>
                  <option value="massage">Масаж</option>
                  <option value="beauty">Косметологія</option>
                  <option value="fitness">Фітнес</option>
                </select>
              </div>

              {/* Location Input */}
              <div className="search-bar__field">
                <svg className="search-bar__icon" width="16" height="20" viewBox="0 0 16 20" fill="none">
                  <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 1C4.5 1 1 3.5 1 8c0 5.5 7 11 7 11s7-5.5 7-11c0-4.5-3.5-7-7-7z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <input
                  type="text"
                  className="search-bar__input"
                  placeholder="Місто"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>

              {/* Search Button */}
              <button type="submit" className="search-bar__btn">
                Знайти
              </button>
            </div>

            {/* Search Results Dropdown */}
            {showResults && (
              <div className="search-results">
                {isLoading && (
                  <div className="search-results__loading">
                    <div className="spinner"></div>
                    Завантаження...
                  </div>
                )}

                {!isLoading && results.length === 0 && (
                  <div className="search-results__empty">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <path d="M21 38a17 17 0 100-34 17 17 0 000 34zM44 44l-9.5-9.5" stroke="#9ca3af" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                    <p>Нічого не знайдено</p>
                    <span>Спробуйте змінити параметри пошуку</span>
                  </div>
                )}

                {!isLoading && results.length > 0 && (
                  <>
                    <div className="search-results__header">
                      Знайдено {results.length} {results.length === 1 ? 'результат' : 'результатів'}
                    </div>
                    {results.map((company) => (
                      <div
                        key={company.id}
                        className="search-results__item"
                        onClick={() => handleResultClick(company)}
                      >
                        <div className="search-results__icon">
                          {company.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="search-results__content">
                          <div className="search-results__name">{company.name}</div>
                          <div className="search-results__details">
                            {company.description && `${company.description} • `}
                            {company.city || 'Київ'}
                          </div>
                        </div>
                        <svg className="search-results__arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    ))}
                  </>
                )}
              </div>
            )}
          </form>

          {/* Quick Links */}
          <div className="quick-links">
            <span className="quick-links__label">Популярні:</span>
            <button
              className="quick-links__item"
              onClick={(e) => {
                e.stopPropagation();
                setCategory('hair');
                setSearchTerm('');
                handleSearch(e);
              }}
            >
              Стрижка
            </button>
            <button
              className="quick-links__item"
              onClick={(e) => {
                e.stopPropagation();
                setCategory('nails');
                setSearchTerm('');
                handleSearch(e);
              }}
            >
              Манікюр
            </button>
            <button
              className="quick-links__item"
              onClick={(e) => {
                e.stopPropagation();
                setCategory('massage');
                setSearchTerm('');
                handleSearch(e);
              }}
            >
              Масаж
            </button>
            <button
              className="quick-links__item"
              onClick={(e) => {
                e.stopPropagation();
                setCategory('spa');
                setSearchTerm('');
                handleSearch(e);
              }}
            >
              СПА
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <div className="container">
          <h2 className="categories__title">Популярні категорії</h2>
          <div className="categories__grid">
            <div
              className="category-card"
              onClick={() => {
                setCategory('hair');
                setSearchTerm('');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="category-card__icon">💇</div>
              <h3 className="category-card__title">Перукарня</h3>
            </div>
            <div
              className="category-card"
              onClick={() => {
                setCategory('nails');
                setSearchTerm('');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="category-card__icon">💅</div>
              <h3 className="category-card__title">Манікюр</h3>
            </div>
            <div
              className="category-card"
              onClick={() => {
                setCategory('massage');
                setSearchTerm('');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="category-card__icon">💆</div>
              <h3 className="category-card__title">Масаж</h3>
            </div>
            <div
              className="category-card"
              onClick={() => {
                setCategory('spa');
                setSearchTerm('');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="category-card__icon">🧖</div>
              <h3 className="category-card__title">СПА</h3>
            </div>
            <div
              className="category-card"
              onClick={() => {
                setCategory('beauty');
                setSearchTerm('');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="category-card__icon">✨</div>
              <h3 className="category-card__title">Косметологія</h3>
            </div>
            <div
              className="category-card"
              onClick={() => {
                setCategory('fitness');
                setSearchTerm('');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="category-card__icon">💪</div>
              <h3 className="category-card__title">Фітнес</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Business CTA Section */}
      <section className="business-cta">
        <div className="container">
          <div className="business-cta__content">
            <h2 className="business-cta__title">Ви власник бізнесу?</h2>
            <p className="business-cta__subtitle">
              Приєднуйтесь до Є віконце та розвивайте свій бізнес
            </p>
            <div className="business-cta__features">
              <div className="business-feature">
                <svg className="business-feature__icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>Онлайн бронювання 24/7</span>
              </div>
              <div className="business-feature">
                <svg className="business-feature__icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>Управління записами</span>
              </div>
              <div className="business-feature">
                <svg className="business-feature__icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>Залучення нових клієнтів</span>
              </div>
            </div>
            <Link to="/companies/welcome" className="business-cta__btn">
              Зареєструвати бізнес
            </Link>
          </div>
        </div>
      </section>

      {/* Client Login Link */}
      <section className="client-login">
        <div className="container">
          <p>Вже маєте запис?</p>
          <Link to="/clients" className="client-login__link">Увійти як клієнт</Link>
        </div>
      </section>
    </div>
  );
}
