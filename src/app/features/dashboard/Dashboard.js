import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar/Navbar';

const DashboardLayout = () => {

  return (
  <div className="dashboard-container grid md:grid-cols-desktop font-quicksand">
    <Navbar />
    <Outlet />
  </div>
  );
}

export default DashboardLayout;
