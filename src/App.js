import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './app/features/dashboard/Dashboard';
import PrivateRoute from './app/features/routes/PrivateRoute';
import PersistLogin from './app/features/sessions/PersistLogin';
import DataProvider from './components/DataProvider';
import './styles/App.css';
import './styles/user.css';

function App() {
  return (
    <main>
      <Router>
        <DataProvider>
          {/* <main className="grid md:grid-cols-desktop font-quicksand"> */}
          <Routes>
            <Route element={<PersistLogin />}>
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
            </Route>
          </Routes>
          {/* </main> */}
        </DataProvider>
      </Router>
    </main>
  );
}

export default App;
