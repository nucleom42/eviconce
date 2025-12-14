import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './../styles/Form.css';

export default function EmployeeForm({ role }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    description: "",
    email: "",
    phone: "",
    password: "",
    role: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/employees", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        employee: {
          first_name: form.first_name,
          last_name: form.last_name,
          description: form.description,
          email: form.email,
          phone: form.phone,
          password: form.password,
          role: role === "admin" ? 1 : 0
        }
      })
    });

    if (response.ok) {
      navigate("/companies"); // or "/companies/login" if this is signup
    } else {
      const body = await response.json();
      setErrors(body.errors || {});
    }
  };

  const errorFor = (field) => errors[field]?.message;

  return (
    <div className="employee-form container">
      <h1>Створити {role === "admin" ? "адміністратора" : "працівника"}</h1>

      <form onSubmit={handleSubmit}>
        {errorFor("first_name") && <div className="field-error">{errorFor("first_name")}</div>}
        <input
          name="first_name"
          value={form.first_name}
          onChange={handleChange}
          placeholder="Імʼя"
        />

        {errorFor("last_name") && <div className="field-error">{errorFor("last_name")}</div>}
        <input
          name="last_name"
          value={form.last_name}
          onChange={handleChange}
          placeholder="Прізвище"
        />

        {errorFor("email") && <div className="field-error">{errorFor("email")}</div>}
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />

        {errorFor("phone") && <div className="field-error">{errorFor("phone")}</div>}
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Телефон"
        />

        {errorFor("password") && <div className="field-error">{errorFor("password")}</div>}
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Пароль"
          required
        />

        {errorFor("description") && <div className="field-error">{errorFor("description")}</div>}
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Опис"
        />

        <button type="submit">Створити</button>
      </form>
    </div>
  );
}

