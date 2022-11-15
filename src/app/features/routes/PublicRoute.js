import React from 'react';
import propTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PublicOnlyRoute({ children }) {
  const accessToken = useSelector((state) => state.session.accessToken);
  const loading = useSelector((state) => state.session.loading);
  const location = useLocation();
  const fromLocation = location.state?.from;
  const previousLocation = location.state
    ? fromLocation
    : { pathname: '/login' };

  if (!accessToken && !loading) {
    return children;
  } if (loading) {
    return <div>Loading...</div>;
  } if (accessToken && !loading) {
    return (
      <Navigate to={previousLocation} state={{ from: location }} replace />
    );
  }
  return <div>Something went wrong</div>;
}

export default PublicOnlyRoute;

PublicOnlyRoute.propTypes = {
  children: propTypes.node.isRequired,
};
