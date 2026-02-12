import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import Calendar from "./Calendar";
import Employees from "./Employees";
import Clients from "./Clients";
import Company from "./Company";
import Settings from "./Settings";
import { useNavigate } from "react-router-dom";
import "./../styles/Dashboard.css";

export default function CompanyDashboard() {
  const [dashboardData, setDashboardData] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch(`/api/companies/${id}/dashboard`)
      .then((res) => {
        if (res.status === 401) {
          navigate("/companies/welcome");
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (data) setDashboardData(data);
      })
      .catch(() => {
        navigate("/companies/welcome");
      });
  }, [id, navigate]);

  if (dashboardData === undefined) {
    return <p>Loading...</p>;
  }

  // Determine which component to render based on current path
  const renderContent = () => {
    const path = location.pathname;

    if (path.includes('/employees')) {
      return <Employees dashboardData={dashboardData} />;
    }
    if (path.includes('/clients')) {
      return <Clients dashboardData={dashboardData} />;
    }
    if (path.includes('/edit')) {
      return <Company dashboardData={dashboardData} />;
    }
    if (path.includes('/settings')) {
      return <Settings dashboardData={dashboardData} />;
    }
    // Default to dashboard/calendar
    return <Calendar employees={dashboardData.employees} companyId={id} />;
  };

  return (
    <div className="dashboard">
      <Sidebar companyName={dashboardData.company.name} id={id} />
      <div className="dashboard__content">
        <TopBar userName={dashboardData.user.first_name} />
        <main className="dashboard__main content-center">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
