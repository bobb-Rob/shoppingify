import React from 'react';
import { Outlet } from 'react-router-dom';

const History = () => (
  <div className="grid md:grid-cols-routes bg-[#fff] h-[100vh]">
    History
    <Outlet />
  </div>
);

export default History;
