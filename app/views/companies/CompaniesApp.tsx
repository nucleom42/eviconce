import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import CompanyForm from "./pages/CompanyForm";
import EmployeeForm from "./pages/EmployeeForm";
import LoginEmployee from "./pages/LoginEmployee";
import CompanyNotFound from "./pages/CompanyNotFound";
import Dashboard from "./pages/Dashboard";
import Welcome from "./pages/Welcome";

import "./styles/Companies.css";

export default function CompaniesApp() {
  return (
    <div>
      <Routes>
        <Route path="/" redirectTo="welcome" />
        <Route path="welcome" element={<Welcome />} />
        <Route path="new" element={<CompanyForm />} />
        <Route path="employees/new" element={<EmployeeForm role="employee" />} />
        <Route path="admins/new" element={<EmployeeForm role="admin" />} />
        <Route path="login" element={<LoginEmployee />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<CompanyNotFound />} />
      </Routes>
    </div>
  );
}
