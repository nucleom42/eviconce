import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CompanyForm() {
  const [error, setError] = useState("");
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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const response = await fetch("/api/companies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
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
      })
    });

    if (response.ok) {
      navigate("/companies");
    } else {
      console.error("Failed to create company");
      const body = JSON.parse(response.body);
      setError(body.errors);
    }
  };

  return (
    <div className="company-form container">
      <h1>Створити компанію</h1>

      {error && <div className="company__error">{error}</div>}

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Назва компанії" value={form.name} onChange={handleChange} required />
        <input name="email" placeholder="Email" type="email" value={form.email} onChange={handleChange} required />
        <input name="website" placeholder="Веб сторінка" value={form.website} onChange={handleChange} />
        <input name="phone" placeholder="Номер телефона" value={form.phone} onChange={handleChange} />
        <textarea name="description" placeholder="Опис діяльності" value={form.description} onChange={handleChange} required/>
        <p class="">Адреса</p>
        <input name="city" placeholder="Місто" value={form.city} onChange={handleChange} required/>
        <input name="country" placeholder="Країна" value={form.country} onChange={handleChange} required/>
        <input name="postal" placeholder="Поштовий індекс" value={form.postal} onChange={handleChange} required/>
        <input name="region" placeholder="Область" value={form.region} onChange={handleChange} required/>
        <input name="street_line1" placeholder="Адреса 1" value={form.street_line1} onChange={handleChange} required/>

        <input name="street_line2" placeholder="Адреса 2" value={form.street_line2} onChange={handleChange} />

        <button type="submit">Створити компанію</button>
      </form>
    </div>
  );
}
