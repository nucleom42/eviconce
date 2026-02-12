import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './../styles/Form.css';

export default function EmployeeForm({ role, employee, onSave, onCancel, isModal = false }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    description: "",
    email: "",
    phone: "",
    password: "",
    role: role === "admin" ? 1 : 0 // Default based on prop
  });
  const [errors, setErrors] = useState({});

  // Prefill form if editing
  useEffect(() => {
    if (employee) {
      setForm({
        first_name: employee.first_name || "",
        last_name: employee.last_name || "",
        description: employee.description || "",
        email: employee.email || "",
        phone: employee.phone || "",
        password: "", // Don't prefill password
        role: employee.role ?? (role === "admin" ? 1 : 0)
      });
    }
  }, [employee, role]);

  const handleChange = (e) => {
    const value = e.target.name === 'role' ? parseInt(e.target.value) : e.target.value;
    setForm({ ...form, [e.target.name]: value });
    setErrors((prev) => ({ ...prev, [e.target.name]: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      employee: {
        first_name: form.first_name,
        last_name: form.last_name,
        description: form.description,
        email: form.email,
        phone: form.phone,
        role: form.role
      }
    };

    // Only include password if it's set (for create or update)
    if (form.password) {
      payload.employee.password = form.password;
    }

    const url = employee ? `/api/employees/${employee.id}` : "/api/employees";
    const method = employee ? "PUT" : "POST";

    const response = await fetch(url, {
      method,
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
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
    <div className={isModal ? "employee-form-modal" : "employee-form container"}>
      <h1>
        {employee ? "Редагувати" : "Створити"}{" "}
        {form.role === 1 ? "адміністратора" : "працівника"}
      </h1>
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
          placeholder={employee ? "Новий пароль (залиште порожнім, щоб не змінювати)" : "Пароль"}
          required={!employee}
        />

        {errorFor("description") && <div className="field-error">{errorFor("description")}</div>}
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Опис"
        />

        {errorFor("role") && <div className="field-error">{errorFor("role")}</div>}
        <label htmlFor="role">Роль</label>
        <select
          id="role"
          name="role"
          value={form.role}
          onChange={handleChange}
          required
        >
          <option value={0}>Працівник</option>
          <option value={1}>Адміністратор</option>
        </select>

        <div className="form-actions">
          {isModal && onCancel && (
            <button type="button" onClick={onCancel}>
              Скасувати
            </button>
          )}
          <button type="submit">
            {employee ? "Оновити" : "Створити"}
          </button>
        </div>
      </form>
    </div>
  );
}
