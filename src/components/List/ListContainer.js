import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const ListContainer = () => (
  <div
    className="grid md:grid-cols-routes bg-[#fff] h-[100vh]"
  >
    <>
      <Header />
    </>
    <Outlet />
  </div>
);

export default ListContainer;
