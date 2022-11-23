import React from 'react';
import { Outlet } from 'react-router-dom';

const Analysis = () => (
  <div className="grid md:grid-cols-routes bg-[#fff] h-[100vh]">
    Analysis
    <Outlet />
  </div>
);

export default Analysis;
