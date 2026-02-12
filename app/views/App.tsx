import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./css/app.css";
import CompanyWebsite from "./clients/CompanyWebsite";
import CompaniesApp from "./companies/CompaniesApp";
import Welcome from "./Welcome";

const NotFound = () => <h2>404 Not Found</h2>;

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        {/** Company dashboard **/}
        <Route path="/companies/*" element={<CompaniesApp />} />
        {/** Companies websites (clients part) **/}
        <Route path="/w/:companyName" element={<CompanyWebsite />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

