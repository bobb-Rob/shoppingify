import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import DashboardLayout from './app/features/dashboard/DashboardLayout';
import ShoppingListLayout from './app/features/dashboard/shoppingList/shoppingListLayout';
import PrivateRoute from './app/features/routes/PrivateRoute';
import PublicOnlyRoute from './app/features/routes/PublicRoute';
import Login from './app/features/sessions/Login';
import PersistLogin from './app/features/sessions/PersistLogin';
import SignUp from './app/features/sessions/signup';
import { UserContext } from './app/DataProvider';
import History from './app/features/dashboard/history/History';
import Analysis from './app/features/dashboard/analysis/Analysis';
import ListContainer from './app/features/dashboard/items/ListContainer';
import 'react-toastify/dist/ReactToastify.css';
import './styles/App.css';
import './styles/user.css';
import './styles/items.css';
import HistoryDetails from './app/features/dashboard/history/HistoryDetails';

function App() {
  const { windowSize } = useContext(UserContext);
  return (
    <Router>
      <main>
        <Routes>
          <Route element={<PersistLogin />}>
            <Route path="/" element={<PrivateRoute />}>
              <Route element={<DashboardLayout />}>
                <Route path="" element={<ListContainer />} />
                <Route path="/history" element={<History />} />
                <Route path="/history/:id/:month" element={<HistoryDetails />} />
                <Route path="/analysis" element={<Analysis />} />
                <Route
                  path="/cart"
                  element={
                    windowSize < 768 ? (
                      <ShoppingListLayout classNam="showShoppingList" />
                    ) : (
                      <Navigate to="/" />
                    )
                  }
                />
              </Route>
            </Route>
            <Route
              path="/login"
              element={(
                <PublicOnlyRoute>
                  <Login />
                </PublicOnlyRoute>
              )}
            />
            <Route
              path="/signup"
              element={(
                <PublicOnlyRoute>
                  <SignUp />
                </PublicOnlyRoute>
              )}
            />
          </Route>
        </Routes>
        <ToastContainer progressClassName="toast-progress-bar" />
      </main>
    </Router>
  );
}

export default App;
