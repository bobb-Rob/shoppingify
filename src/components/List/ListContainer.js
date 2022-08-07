import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const ListContainer = () => (
  <div
    className="grid md:grid-cols-routes bg-[#fff] h-[100vh]"
  >
    <div>
      <Header />
      <div>
        List containtaier
      </div>
    </div>
    <Outlet />
  </div>
);

export default ListContainer;
