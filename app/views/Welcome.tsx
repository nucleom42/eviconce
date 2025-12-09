import React from 'react';
import { Link } from "react-router-dom";
import "./css/welcome.css";

export default function Welcome() {
  return (
    <div className="welcome container">
      <h1 className="welcome__title">Є віконце</h1>
      <p className="welcome__subtitle">Що будемо робити?</p>

      <div className="welcome__actions">
        <Link to="/clients" className="welcome__btn">Я клієнт</Link>
        <Link to="/companies" className="welcome__btn">Я бізнес</Link>
      </div>
    </div>
  );
}
