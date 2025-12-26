import React from "react";
import "./../styles/TopBar.css";

export default function TopBar({ userName }) {
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
        <h1>{userName}</h1>
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

