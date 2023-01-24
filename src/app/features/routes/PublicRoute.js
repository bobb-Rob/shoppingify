import React from 'react';
// /* eslint-disable */
import propTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loading from '../loading/Loading';

function PublicOnlyRoute({ children }) {
  const accessToken = useSelector((state) => state.session.accessToken);
  const loading = useSelector((state) => state.session.loading);
  // const location = useLocation();
  // const fromLocation = location.state?.from;

  // const previousLocation = location.state
  //   ? fromLocation
  //   : { pathname: '/login' };

  if (!accessToken && !loading) {
    return children;
  } if (loading) {
    return <Loading />;
  } if (accessToken && !loading) {
    return (
      <>
        <Navigate to="/" replace />
      </>
    );
  }
  return <div>Something went wrong</div>;
}

export default PublicOnlyRoute;

PublicOnlyRoute.propTypes = {
  children: propTypes.node.isRequired,
};
