import React from 'react';
import propTypes from 'prop-types';

function PrivateRoute({ children }) {
  const accessToken = false;
  const loading = false;

  if (accessToken) {
    return children;
  } else if (loading) {
    return <div>Loading...</div>;
  } else if (!accessToken && !loading) {
    return <div>Not authorized</div>;
  } else {
    return <div>Something went wrong</div>;
  }
}

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: propTypes.node.isRequired,
};
