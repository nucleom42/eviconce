import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Form.css";

export default function ClientForm({
  client,
  onSave,
  onCancel,
  isModal = false,
}) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  // Prefill form if editing
  useEffect(() => {
    if (client) {
      setForm({
        first_name: client.first_name || "",
        last_name: client.last_name || "",
        email: client.email || "",
        phone: client.phone || "",
        password: "", // Don't prefill password
      });
    }
  }, [client]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      client: {
        first_name: form.first_name,
        last_name: form.last_name,
        email: form.email,
        phone: form.phone,
      },
    };

    // Only include password if it's set
    if (form.password) {
      payload.client.password = form.password;
    }

    const url = client ? `/api/clients/${client.id}` : "/api/clients";
    const method = client ? "PUT" : "POST";

    const response = await fetch(url, {
      method,
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const data = await response.json();
      if (isModal && onSave) {
        onSave(data);
      } else {
        navigate("/companies/welcome");
      }
    } else {
      const body = await response.json();
      setErrors(body.errors || {});
    }
  };

  const errorFor = (field) => errors[field]?.message;

  return (
    <div className={isModal ? "client-form-modal" : "client-form container"}>
      <h1>{client ? "Редагувати клієнта" : "Створити клієнта"}</h1>
      <form onSubmit={handleSubmit}>
        {errorFor("first_name") && (
          <div className="field-error">{errorFor("first_name")}</div>
        )}
        <input
          name="first_name"
          value={form.first_name}
          onChange={handleChange}
          placeholder="Імʼя"
        />

        {errorFor("last_name") && (
          <div className="field-error">{errorFor("last_name")}</div>
        )}
        <input
          name="last_name"
          value={form.last_name}
          onChange={handleChange}
          placeholder="Прізвище"
        />

        {errorFor("email") && (
          <div className="field-error">{errorFor("email")}</div>
        )}
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />

        {errorFor("phone") && (
          <div className="field-error">{errorFor("phone")}</div>
        )}
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Телефон"
        />

        {errorFor("password") && (
          <div className="field-error">{errorFor("password")}</div>
        )}
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder={
            client
              ? "Новий пароль (залиште порожнім, щоб не змінювати)"
              : "Пароль"
          }
          required={!client}
        />

        <div className="form-actions">
          {isModal && onCancel && (
            <button type="button" onClick={onCancel}>
              Скасувати
            </button>
          )}
          <button type="submit">{client ? "Оновити" : "Створити"}</button>
        </div>
      </form>
    </div>
  );
}
