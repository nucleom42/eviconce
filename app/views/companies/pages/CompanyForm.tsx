import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './../styles/Form.css';

export default function CompanyForm({ company, onSave, onCancel, isModal = false }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    website: "",
    phone: "",
    description: "",
    city: "",
    country: "",
    postal: "",
    region: "",
    street_line1: "",
    street_line2: ""
  });

  const [errors, setErrors] = useState({});

  // Prefill form if editing
  useEffect(() => {
    if (company) {
      setForm({
        name: company.name || "",
        email: company.email || "",
        website: company.website || "",
        phone: company.phone || "",
        description: company.description || "",
        city: company.address?.city || "",
        country: company.address?.country || "",
        postal: company.address?.postal || "",
        region: company.address?.region || "",
        street_line1: company.address?.street_line1 || "",
        street_line2: company.address?.street_line2 || ""
      });
    }
  }, [company]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      company: {
        name: form.name,
        email: form.email,
        website: form.website,
        phone: form.phone,
        description: form.description
      },
      address: {
        city: form.city,
        country: form.country,
        postal: form.postal,
        region: form.region,
        street_line1: form.street_line1,
        street_line2: form.street_line2
      }
    };

    const url = company ? `/api/companies/${company.id}` : "/api/companies";
    const method = company ? "PUT" : "POST";

    const response = await fetch(url, {
      method,
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const body = await response.json();

    if (response.ok) {
      if (isModal && onSave) {
        onSave(body);
      } else {
        navigate(`/companies/${body.id}/dashboard`);
      }
    } else {
      setErrors(body.errors || {});
    }
  };

  const errorFor = (field) => errors[field]?.message;

  return (
    <div className={isModal ? "company-form-modal" : "company-form container"}>
      <h1>{company ? "Редагувати компанію" : "Створити компанію"}</h1>

      <form onSubmit={handleSubmit}>
        <p>Компанія</p>

        {errorFor("name") && <div className="field-error">{errorFor("name")}</div>}
        <input name="name" value={form.name} onChange={handleChange} placeholder="Назва компанії" />

        {errorFor("email") && <div className="field-error">{errorFor("email")}</div>}
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />

        {errorFor("website") && <div className="field-error">{errorFor("website")}</div>}
        <input name="website" value={form.website} onChange={handleChange} placeholder="Веб сторінка" />

        {errorFor("phone") && <div className="field-error">{errorFor("phone")}</div>}
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Номер телефона" />

        {errorFor("description") && <div className="field-error">{errorFor("description")}</div>}
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Опис діяльності" />

        <p>Адреса</p>

        {errorFor("city") && <div className="field-error">{errorFor("city")}</div>}
        <input name="city" value={form.city} onChange={handleChange} placeholder="Місто" />

        {errorFor("country") && <div className="field-error">{errorFor("country")}</div>}
        <input name="country" value={form.country} onChange={handleChange} placeholder="Країна" />

        {errorFor("postal") && <div className="field-error">{errorFor("postal")}</div>}
        <input name="postal" value={form.postal} onChange={handleChange} placeholder="Поштовий індекс" />

        {errorFor("region") && <div className="field-error">{errorFor("region")}</div>}
        <input name="region" value={form.region} onChange={handleChange} placeholder="Область" />

        {errorFor("street_line1") && <div className="field-error">{errorFor("street_line1")}</div>}
        <input name="street_line1" value={form.street_line1} onChange={handleChange} placeholder="Адреса 1" />

        {errorFor("street_line2") && <div className="field-error">{errorFor("street_line2")}</div>}
        <input name="street_line2" value={form.street_line2} onChange={handleChange} placeholder="Адреса 2" />

        <div className="form-actions">
          {isModal && onCancel && (
            <button type="button" onClick={onCancel}>
              Скасувати
            </button>
          )}
          <button type="submit">
            {company ? "Оновити" : "Створити компанію"}
          </button>
        </div>
      </form>
    </div>
  );
}
