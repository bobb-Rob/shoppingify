import React from 'react';
import { Outlet } from 'react-router-dom';
// import ListContainer from './items/ListContainer';
import ShoppingListLayout from './shoppingList/ShoppingListLayout';
// import History from './history/History';
// import Analysis from './analysis/Analysis';
import Navbar from './navbar/Navbar';

const DashboardLayout = () => {
  // Fetch shopping list 

  return (
  <div className="dashboard-container grid grid-cols-mobile md:grid-cols-desktop font-quicksand">
    <Navbar />
    <div>
      <Outlet />
    </div>
    <ShoppingListLayout />
  </div>
  );
}

export default DashboardLayout;
