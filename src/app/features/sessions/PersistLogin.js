import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { refreshAccessToken } from './sessionSlice';

const PersistLogin = () => {
  const loading = useSelector((state) => state.session.loading);
  const accessToken = useSelector((state) => state.session.accessToken);
  const refreshToken = useSelector((state) => state.session.refreshToken);
  const dispatch = useDispatch();

  useEffect(() => {
    function verifyRefreshToken() {
      try {
        dispatch(refreshAccessToken(refreshToken));
      } catch (error) {
        console.log(error);
      }
    }

    if (!accessToken) {
      verifyRefreshToken();
    }
  }, [accessToken, refreshToken]);

  return <>{loading ? <div>Loading...</div> : <Outlet />}</>;
};

export default PersistLogin;
