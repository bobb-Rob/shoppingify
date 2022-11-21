import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute() {
  const accessToken = useSelector((state) => state.session.accessToken);
  const loading = useSelector((state) => state.session.loading);
  // const navigate = useNavigate();
  const location = useLocation();
  const fromLocation = location.state?.from;
  console.log('fromLocation', fromLocation);
  const previousLocation = location.state
    ? fromLocation
    : { pathname: '/login' };

  if (accessToken) {
    return <Outlet />;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!accessToken && !loading) {
    return (
      <Navigate to={previousLocation} state={{ from: location }} replace />
    );
  }
  return <div>Something went wrong</div>;
}

export default PrivateRoute;
