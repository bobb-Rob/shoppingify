import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loading from '../loading/Loading';

function PrivateRoute() {
  const accessToken = useSelector((state) => state.session.accessToken);
  const loading = useSelector((state) => state.session.loading);
  const location = useLocation();
  const fromLocation = location.state?.from;
  const previousLocation = location.state
    ? fromLocation
    : { pathname: '/login' };

  if (accessToken) {
    return <Outlet />;
  }
  if (loading) {
    return <Loading />;
  }
  if (!accessToken && !loading) {
    return (
      <Navigate to={previousLocation} state={{ from: location }} replace />
    );
  }
  return <div>Something went wrong</div>;
}

export default PrivateRoute;
