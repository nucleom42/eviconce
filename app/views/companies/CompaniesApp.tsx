import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import CompanyForm from "./pages/CompanyForm";
import LoginEmployee from "./pages/LoginEmployee";
import CompanyNotFound from "./pages/CompanyNotFound";
import Welcome from "./pages/Welcome";

import "./styles/companies.css";

export default function CompaniesApp() {
  return (
    <div>
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="new" element={<CompanyForm />} />
        <Route path="login" element={<LoginEmployee />} />
        <Route path="*" element={<CompanyNotFound />} />
      </Routes>
    </div>
  );
}
