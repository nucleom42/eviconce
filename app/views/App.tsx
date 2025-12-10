import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./css/App.css";
import ClientsApp from "./clients/ClientsApp";
import CompaniesApp from "./companies/CompaniesApp";
import Welcome from "./Welcome";

const NotFound = () => <h2>404 Not Found</h2>;

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/clients/*" element={<ClientsApp />} />
        <Route path="/companies/*" element={<CompaniesApp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

