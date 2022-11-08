import React from 'react';
import propTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';

function PublicOnlyRoute({ children }) {
  const accessToken = false;
  const loading = false;
  const location = useLocation();
  const fromLocation = location.state?.from;
  const previousLocation = location.state
    ? fromLocation
    : { pathname: '/login' };

  if (!accessToken && !loading) {
    return children;
  } else if (loading) {
    return <div>Loading...</div>;
  } else if (accessToken && !loading) {
    return <Navigate to={previousLocation} state={{ from: location }} replace />;
  } else {
    return <div>Something went wrong</div>;
  }
}

export default PublicOnlyRoute;

PublicOnlyRoute.propTypes = {
  children: propTypes.node.isRequired,
};
