import React from 'react';
import { Outlet } from 'react-router-dom';
import ListContainer from './items/ListContainer';
import Navbar from './navbar/Navbar';

const DashboardLayout = () => {

  return (
  <div className="dashboard-container grid md:grid-cols-desktop font-quicksand">
    <Navbar />
    <div>
      <Routes>
        <Route path="" element={<ListContainer />}>
          <Route path="" element={<ItemSection />} />
        </Route>
        <Route path="/history" element={<History />}>
          <Route path="" element={<ItemSection />} />
        </Route>
        <Route path="/analysis" element={<Analysis />}>
          <Route path="" element={<ItemSection />} />
        </Route>
      </Routes>
    </div>
  </div>
  );
}

export default DashboardLayout;

DashboardLayout.propTypes = {
  main: PropTypes.element.isRequired,
};

