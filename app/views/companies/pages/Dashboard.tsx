import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import Calendar from "./Calendar";
import { useNavigate } from "react-router-dom";

import "./../styles/Dashboard.css";

export default function CompanyDashboard() {
  const [dashboardData, setDashboardData] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

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
  }, [id, navigate, setDashboardData]);

  return (
    <>
      {dashboardData === undefined ? <p>Loading...</p> :
      <div className="dashboard">
        <Sidebar companyName={dashboardData.company.name}/>
        <div className="dashboard__content">
          <TopBar userName={dashboardData.user.first_name}/>
          <main className="dashboard__main">
            <Calendar employees={dashboardData.employees}/>
          </main>
        </div>
      </div>
    }
    </>
  );
}

