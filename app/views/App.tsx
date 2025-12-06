import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./../../css/app.css";
import ClientsApp from "./clients/ClientsApp";
import CompaniesApp from "./companies/CompaniesApp";

const Welcome = () => (
  <div>
    <h2>Є віконце</h2>
    <p>Що будемо робити?</p>
    <nav>
        <Link to="/clients">Я клієнт</Link><br />
        <Link to="/companies">Я бізнес</Link><br />
    </nav>
  </div>
);

const NotFound = () => <h2>404 Not Found</h2>;

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/clients" element={<ClientsApp />} />
        <Route path="/companies" element={<CompaniesApp />} />
      </Routes>
    </Router>
  );
}

