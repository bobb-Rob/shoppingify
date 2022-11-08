import React from 'react';
import propTypes from 'prop-types';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const accessToken = false;
  const loading = false;
  const navigate = useNavigate();
  const location = useLocation();
  const fromLocation = location.state?.from;
  const previousLocation = location.state
    ? fromLocation
    : { pathname: '/login' };

  if (accessToken) {
    return children;
  } else if (loading) {
    return <div>Loading...</div>;
  } else if (!accessToken && !loading) {
    return <Navigate to={previousLocation} state={{ from: location }} replace />;
  } else {
    return <div>Something went wrong</div>;
  }
}

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: propTypes.node.isRequired,
};