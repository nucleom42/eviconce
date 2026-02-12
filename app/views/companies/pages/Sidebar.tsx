import React from "react";
import { NavLink } from "react-router-dom";
import "./../styles/Sidebar.css";

export default function Sidebar({companyName, id}: any) {
  return (
    <aside className="sidebar">
      <h2 className="sidebar__logo">{companyName}</h2>

      <nav className="sidebar__nav">
        <NavLink to={`/companies/${id}/dashboard`}>Dashboard</NavLink>
        <NavLink to={`/companies/${id}/employees`}>Employees</NavLink>
        <NavLink to={`/companies/${id}/clients`}>Clients</NavLink>
        <NavLink to={`/companies/${id}/edit`}>Company</NavLink>
        <NavLink to={`/companies/${id}/settings`}>Settings</NavLink>
      </nav>
    </aside>
  );
}

