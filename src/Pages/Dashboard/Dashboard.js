import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <Sidebar>
       <h1 className="text-5xl font-bold">Welome to Dashboard</h1>
       <Outlet></Outlet>
    </Sidebar>
  );
};

export default Dashboard;
