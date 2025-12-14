import React from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import Calendar from "./Calendar";

import "./../styles/Dashboard.css";

export default function CompanyDashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard__content">
        <TopBar />
        <main className="dashboard__main">
          <Calendar />
        </main>
      </div>
    </div>
  );
}

