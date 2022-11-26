import React, { useContext, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import ShoppingListLayout from './shoppingList/shoppingListLayout';
import Navbar from './navbar/Navbar';
import { UserContext } from '../../DataProvider';
// npm install dotenv

const DashboardLayout = () => {
  const location = useLocation();
  const { setWindowSize } = useContext(UserContext);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <div className="dashboard-container grid grid-cols-mobile md:grid-cols-desktop font-quicksand">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <ShoppingListLayout />
    </div>
  );
};

export default DashboardLayout;
