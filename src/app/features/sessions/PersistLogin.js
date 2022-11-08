import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const PersistLogin = () => {
  const loading = false;
  const accessToken = false;
  const refreshToken = null;

  useEffect(() => {
    function verifyRefreshToken() {
      try {
        // dispatchEvent(refreshAccessToken(refreshToken));
        console.log('refreshing AccessToken');
      } catch (error) {
        console.log(error);
      }
    }
    if (!accessToken) {
      verifyRefreshToken();
    }
  }, [accessToken, refreshToken]);

  return <>{loading ? <div>Loading...</div> : <Outlet />};</>;
};

export default PersistLogin;
