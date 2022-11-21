import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './app/features/dashboard/DashboardLayout';
import PrivateRoute from './app/features/routes/PrivateRoute';
import PublicOnlyRoute from './app/features/routes/PublicRoute';
import Login from './app/features/sessions/Login';
// import Logout from './app/features/sessions/Logout';
import PersistLogin from './app/features/sessions/PersistLogin';
import SignUp from './app/features/sessions/signup';
import DataProvider from './app/DataProvider';
import History from './app/features/dashboard/history/History';
import Analysis from './app/features/dashboard/analysis/Analysis';
import ListContainer from './app/features/dashboard/items/ListContainer';
import ShoppingListLayout from './app/features/dashboard/shoppingList/ShoppingListLayout';
import './styles/App.css';
import './styles/user.css';
import './styles/items.css';

function App() {
  return (
    <DataProvider>
      <Router>
        {/* <main className="grid md:grid-cols-desktop font-quicksand"> */}
        <main>
          <Routes>
            <Route element={<PersistLogin />}>
              <Route
                path="/"
                element={<PrivateRoute/>}
              >
                <Route element={<DashboardLayout /> }>
                  <Route path="" element={<ListContainer />} />
                  <Route path="/history" element={<History />} />
                  <Route path="/analysis" element={<Analysis />} />
                  <Route path="/cart" element={<ShoppingListLayout />} />
                </Route>    
              </Route>
              {/* <Route
                path="/logout"
                element={
                  <PrivateRoute>
                    <Logout />
                  </PrivateRoute>
                }
              /> */}
              <Route
                path="/login"
                element={
                  <PublicOnlyRoute>
                    <Login />
                  </PublicOnlyRoute>
                }
              />
              <Route
                path="/signup"
                element={
                  <PublicOnlyRoute>
                    <SignUp />
                  </PublicOnlyRoute>
                }
              />
            </Route>
          </Routes>
        </main>
        {/* </main> */}
      </Router>
    </DataProvider>
  );
}

export default App;
