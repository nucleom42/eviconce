import React from "react";
import { NavLink } from "react-router-dom";
import "./../styles/Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar__logo">MyCompany</h2>

      <nav className="sidebar__nav">
        <NavLink to="/companies/dashboard">Dashboard</NavLink>
        <NavLink to="/companies/employees">Employees</NavLink>
        <NavLink to="/companies/clients">Clients</NavLink>
        <NavLink to="/companies/edit">Company</NavLink>
        <NavLink to="/companies/settings">Settings</NavLink>
      </nav>
    </aside>
  );
}

