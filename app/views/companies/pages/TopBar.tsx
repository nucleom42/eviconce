import React from "react";
import "./../styles/TopBar.css";

export default function TopBar() {
  const logout = async () => {
    await fetch("/api/logout", {
      method: "POST",
      credentials: "include"
    });
    window.location.href = "/login";
  };

  return (
    <header className="topbar">
      <div className="topbar__left">
        <h1>Dashboard</h1>
      </div>

      <div className="topbar__right">
        <span className="topbar__user"></span>
        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </div>
    </header>
  );
}

