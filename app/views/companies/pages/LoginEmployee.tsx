import React, { useState } from "react";
import "./../styles/LoginEmployee.css";
import { useNavigate } from "react-router-dom";

export default function LoginEmployee() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();
    setError("");

    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      const response = await fetch("/api/employees/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        setError("Невірний email або пароль");
        return;
      }
      const data = await response.json();
      data.has_company ? navigate("/companies/dashboard") : navigate("/companies/new");

    } catch (err) {
      console.error(err);
      setError("Помилка з’єднання з сервером");
    }
  }

  return (
    <div className="login container">
      <h1 className="login__title">Вхід</h1>

      {error && <div className="login__error">{error}</div>}

      <form className="login__form" onSubmit={handleLogin}>
        <input type="email" placeholder="Email" name="email" required />
        <input type="password" placeholder="Пароль" name="password" required />
        <button type="submit" className="btn">Увійти</button>
      </form>
    </div>
  );
}
