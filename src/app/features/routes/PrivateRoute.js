import React from 'react';
import propTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ children }) {
  const accessToken = useSelector((state) => state.session.accessToken);
  const loading = useSelector((state) => state.session.loading);
  // const navigate = useNavigate();
  const location = useLocation();
  const fromLocation = location.state?.from;
  const previousLocation = location.state
    ? fromLocation
    : { pathname: '/login' };

  if (accessToken) {
    return children;
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

PrivateRoute.propTypes = {
  children: propTypes.node.isRequired,
};
