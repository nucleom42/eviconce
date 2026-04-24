import React from "react";
import { NavLink } from "react-router-dom";
import "./../styles/Sidebar.css";

export default function Sidebar({ companyName, id, evikonceUrl }: any) {
  return (
    <aside className="sidebar">
      <div class="hero-logo-small content-center">
        <img src="/images/evikonce-logo.png" alt="Є Віконце"/>
        <div className="hero-logo-name-small">
            <span>Є</span> Віконце
        </div>
      </div>
      <h2 className="sidebar__logo">
        <NavLink to={`/w/${evikonceUrl}`}>{companyName}</NavLink>
      </h2>

      <nav className="sidebar__nav">
        <NavLink to={`/companies/${id}/dashboard`}>Календар</NavLink>
        <NavLink to={`/companies/${id}/employees`}>Працівники</NavLink>
        <NavLink to={`/companies/${id}/clients`}>Клієнти</NavLink>
        <NavLink to={`/companies/${id}/edit`}>Компанія</NavLink>
        <NavLink to={`/companies/${id}/settings`}>Налаштування</NavLink>
      </nav>
    </aside>
  );
}
