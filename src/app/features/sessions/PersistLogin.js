import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Loading from '../loading/Loading';
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
        console.error(error);
      }
    }

    if (!accessToken) {
      verifyRefreshToken();
    }
  }, [accessToken, refreshToken]);

  const loadingSpinner = (
    <div className="flex justify-center pt-60">
      <Loading />
    </div>
  );

  return <>{loading ? loadingSpinner : <Outlet />}</>;
};

export default PersistLogin;
