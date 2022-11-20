import React from 'react';
import { Outlet, Routes, Route } from 'react-router-dom';
import ListContainer from './items/ListContainer';
import ShoppingListLayout from './shoppingList/ShoppingListLayout';
import History from './history/History';
import Analysis from './analysis/Analysis';
import Navbar from './navbar/Navbar';

const DashboardLayout = () => {
  // Fetch shopping list 

  return (
  <div className="dashboard-container grid md:grid-cols-desktop font-quicksand">
    <Navbar />
    <div>
      <Routes>
        <Route path="" element={<ListContainer />} />
        <Route path="/history" element={<History />} />
        <Route path="/analysis" element={<Analysis />} />
      </Routes>
    </div>
    <ShoppingListLayout />
  </div>
  );
}

export default DashboardLayout;
