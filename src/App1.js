import React, { useContext } from 'react';
import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import PersistLogin from './app/features/sessions/PersistLogin';
import DashboardLayout from './app/features/dashboard/DashboardLayout';
import History from './app/features/dashboard/history/History';
import HistoryDetails from './app/features/dashboard/history/HistoryDetails';
import Analysis from './app/features/dashboard/analysis/Analysis';
import ItemContainer from './app/features/dashboard/items/itemContainer';
import { UserContext } from './app/DataProvider';
import ShoppingListLayout from './app/features/dashboard/shoppingList/shoppingListLayout';
import './styles/App.css';
import './styles/user.css';
import './styles/items.css';

const App1 = () => {
  const { windowSize } = useContext(UserContext);
  return (
    <Router>
      <main>
        <Routes>
          <Route element={<PersistLogin />}>
            <Route path="/" element={<DashboardLayout />}>
              <Route path="" element={<ItemContainer />} />
              <Route path="history" element={<History />} />
              <Route path="history/:id/:month" element={<HistoryDetails />} />
              <Route path="analysis" element={<Analysis />} />
              <Route
                path="cart"
                element={
                  windowSize < 768 ? (
                    <ShoppingListLayout classNam="showShoppingList" />
                  ) : (
                    <Navigate to="/dashboard/list" />
                  )
                }
              />
            </Route>
          </Route>
        </Routes>
      </main>
    </Router>
  );
};

export default App1;
