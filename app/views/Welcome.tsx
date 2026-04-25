import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./css/welcome.css";
import CATEGORIES from "./data/ua_categories.json";
import CITIES from "./data/ua_cities.json";

export default function Welcome() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [categorySearch, setCategorySearch] = useState("");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const resultsRef = useRef(null);

  // Filter categories based on search - SAME AS COMPANYFORM
  const filteredCategories = CATEGORIES.filter((category) =>
    category.toLowerCase().includes(categorySearch.toLowerCase()),
  );
  useEffect(() => {
    document.title = "Є віконце — Логін / Реєстрація";
  }, []);

  // Close dropdown when clicking outside - SAME AS COMPANYFORM
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (resultsRef.current && !resultsRef.current.contains(event.target)) {
        setShowResults(false);
      }
      if (!event.target.closest(".category-search-container")) {
        setShowCategoryDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle category selection - SAME AS COMPANYFORM
  const handleCategorySelect = (category) => {
    if (!selectedCategories.includes(category)) {
      setSelectedCategories([...selectedCategories, category]);
      setCategorySearch("");
      setShowCategoryDropdown(false);
    }
  };

  // Remove category - SAME AS COMPANYFORM
  const handleRemoveCategory = (categoryToRemove) => {
    setSelectedCategories(
      selectedCategories.filter((cat) => cat !== categoryToRemove),
    );
  };

  const handleSearch = async (e) => {
    if (e) e.preventDefault();

    // Don't search if no criteria
    if (!searchTerm && selectedCategories.length === 0 && !selectedCity) {
      return;
    }

    setIsLoading(true);
    setShowResults(true);

    try {
      const params = new URLSearchParams();

      if (searchTerm) {
        params.append("params[name]", searchTerm);
      }

      if (selectedCity) {
        params.append("params[city]", selectedCity);
      }

      // Add all selected categories
      selectedCategories.forEach((category) => {
        params.append("params[categories][]", category);
      });

      const response = await fetch(`/api/companies?${params.toString()}`, {
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        setResults(Array.isArray(data) ? data : []);
      } else {
        setResults([]);
      }
    } catch (error) {
      console.error("Search error:", error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResultClick = (company) => {
    const slug = company.evikonce_url;
    navigate(`/w/${slug}`);
  };

  const handleQuickLink = (city) => {
    setSelectedCity(city);
    setSearchTerm("");
    setSelectedCategories([]);
    setTimeout(() => {
      fetchResults({ city });
    }, 0);
  };

  const handleCategoryCard = (category) => {
    if (!selectedCategories.includes(category)) {
      setSelectedCategories([category]);
      setSearchTerm("");
      setSelectedCity("");
      setTimeout(() => {
        fetchResults({ categories: [category] });
      }, 0);
    }
  };

  const fetchResults = async ({ city, categories }) => {
    setIsLoading(true);
    setShowResults(true);

    try {
      const params = new URLSearchParams();

      if (city) {
        params.append("params[city]", city);
      }

      if (categories && categories.length > 0) {
        categories.forEach((cat) => {
          params.append("params[categories][]", cat);
        });
      }

      const response = await fetch(`/api/companies?${params.toString()}`, {
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        setResults(Array.isArray(data) ? data : []);
      } else {
        setResults([]);
      }
    } catch (error) {
      console.error("Search error:", error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="welcome-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-logo">
          <img src="/images/evikonce-logo.png" alt="Є Віконце" />
          <div className="hero-logo-name">
            <span>Є</span> Віконце
          </div>
        </div>
        <div className="hero-content">
          <h1>Знайдіть найкращі послуги у вашому місті</h1>
          <p>Салони краси, СПА, фітнес, стоматологія та багато іншого</p>

          {/* Search Form */}
          <form className="search-form" onSubmit={handleSearch}>
            <div className="search-inputs">
              {/* Service/Company Name Input */}
              <div className="search-field">
                <input
                  type="text"
                  placeholder="Назва компанії або послуги"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>

              {/* Categories Multi-Select - EXACTLY LIKE COMPANYFORM */}
              <div className="search-field category-search-container">
                <div className="category-search-wrapper">
                  {/* Selected Categories Tags */}
                  {selectedCategories.length > 0 && (
                    <div className="selected-categories-tags-mini">
                      {selectedCategories.map((category) => (
                        <span key={category} className="category-tag-mini">
                          {category}
                          <button
                            type="button"
                            className="category-tag-remove"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRemoveCategory(category);
                            }}
                            aria-label="Видалити категорію"
                          >
                            ✕
                          </button>
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Category Search Input */}
                  <input
                    type="text"
                    className="category-search-input"
                    placeholder={
                      selectedCategories.length > 0
                        ? "Додати ще..."
                        : "Шукати категорії..."
                    }
                    value={categorySearch}
                    onChange={(e) => {
                      setCategorySearch(e.target.value);
                      setShowCategoryDropdown(true);
                    }}
                    onFocus={() => setShowCategoryDropdown(true)}
                  />

                  {/* Category Dropdown */}
                  {showCategoryDropdown && categorySearch && (
                    <div className="category-dropdown">
                      {filteredCategories.length > 0 ? (
                        filteredCategories.slice(0, 50).map((category) => (
                          <div
                            key={category}
                            className={`category-dropdown-item ${
                              selectedCategories.includes(category)
                                ? "selected"
                                : ""
                            }`}
                            onClick={() => handleCategorySelect(category)}
                          >
                            {category}
                            {selectedCategories.includes(category) && (
                              <span className="checkmark">✓</span>
                            )}
                          </div>
                        ))
                      ) : (
                        <div className="category-dropdown-empty">
                          Категорії не знайдено
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* City Dropdown */}
              <div className="search-field">
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="search-select"
                >
                  <option value="">Всі міста</option>
                  {CITIES.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search Button */}
              <button type="submit" className="search-button">
                Шукати
              </button>
            </div>

            {/* Search Results Dropdown */}
            {showResults && (
              <div className="search-results-dropdown" ref={resultsRef}>
                {isLoading ? (
                  <div className="results-loading">
                    <div className="spinner"></div>
                    <p>Пошук...</p>
                  </div>
                ) : results.length > 0 ? (
                  <div className="results-list">
                    {results.map((company) => (
                      <div
                        key={company.id}
                        className="result-item"
                        onClick={() => handleResultClick(company)}
                      >
                        <div className="result-info">
                          <h4>{company.name}</h4>
                          <p className="result-category">
                            {company.categories?.[0]?.name ||
                              company.description?.substring(0, 60)}
                          </p>
                          <p className="result-location">
                            📍 {company.address?.city}
                            {company.address?.street_line1 &&
                              `, ${company.address.street_line1}`}
                          </p>
                        </div>
                        {company.rating && (
                          <div className="result-rating">
                            ⭐ {company.rating}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="results-empty">
                    <p>Нічого не знайдено</p>
                    <span>Спробуйте змінити критерії пошуку</span>
                  </div>
                )}
              </div>
            )}
          </form>

          {/* Register Company Button - NEW */}
          <div className="register-company-cta">
            <p className="register-company-text">Ви власник бізнесу?</p>
            <Link to="/companies/welcome" className="register-company-button">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 4v12M4 10h12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              Зареєструвати компанію
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="quick-links-section">
        <h2>Популярні міста</h2>
        <div className="quick-links">
          <button
            className="quick-links-button"
            onClick={() => handleQuickLink("Київ")}
          >
            Київ
          </button>
          <button
            className="quick-links-button"
            onClick={() => handleQuickLink("Львів")}
          >
            Львів
          </button>
          <button
            className="quick-links-button"
            onClick={() => handleQuickLink("Одеса")}
          >
            Одеса
          </button>
          <button
            className="quick-links-button"
            onClick={() => handleQuickLink("Харків")}
          >
            Харків
          </button>
          <button
            className="quick-links-button"
            onClick={() => handleQuickLink("Дніпро")}
          >
            Дніпро
          </button>
          <button
            className="quick-links-button"
            onClick={() => handleQuickLink("Запоріжжя")}
          >
            Запоріжжя
          </button>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="categories-section">
        <h2>Популярні категорії</h2>
        <div className="category-cards">
          <div
            className="category-card"
            onClick={() => handleCategoryCard("Перукарня")}
          >
            <div className="category-icon"></div>
            <h3>Перукарня</h3>
            <p>Стрижки, укладки, фарбування</p>
          </div>

          <div
            className="category-card"
            onClick={() => handleCategoryCard("Манікюр")}
          >
            <div className="category-icon"></div>
            <h3>Манікюр</h3>
            <p>Манікюр, педикюр, нарощування</p>
          </div>

          <div
            className="category-card"
            onClick={() => handleCategoryCard("СПА")}
          >
            <div className="category-icon"></div>
            <h3>СПА</h3>
            <p>Масаж, релакс, догляд</p>
          </div>

          <div
            className="category-card"
            onClick={() => handleCategoryCard("Фітнес")}
          >
            <div className="category-icon"></div>
            <h3>Фітнес</h3>
            <p>Тренажерна зала, йога, пілатес</p>
          </div>

          <div
            className="category-card"
            onClick={() => handleCategoryCard("Стоматологія")}
          >
            <div className="category-icon"></div>
            <h3>Стоматологія</h3>
            <p>Лікування, протезування, відбілювання</p>
          </div>

          <div
            className="category-card"
            onClick={() => handleCategoryCard("Косметологія")}
          >
            <div className="category-icon"></div>
            <h3>Косметологія</h3>
            <p>Чистка, пілінг, ін'єкції краси</p>
          </div>

          <div
            className="category-card"
            onClick={() => handleCategoryCard("Масаж")}
          >
            <div className="category-icon"></div>
            <h3>Масаж</h3>
            <p>Класичний, тайський, спортивний</p>
          </div>

          <div
            className="category-card"
            onClick={() => handleCategoryCard("Татуювання")}
          >
            <div className="category-icon"></div>
            <h3>Татуювання</h3>
            <p>Тату, пірсинг, художнє татуювання</p>
          </div>
        </div>
      </section>
    </div>
  );
}
