import myAxios from './myAxios';

const LOGIN_URL = '/oauth/token';
// const LOGOUT_URL = '/oauth/revoke';
const SIGNUP_URL = '/users';
const CURRENT_USER_URL = '/users/current';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

export async function createUserWithEmailAndPassword(userData) {
  // add client_id to userData without modifying the original object
  const data = { ...userData, client_id: CLIENT_ID };

  return myAxios
    .post(SIGNUP_URL, data)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}

export async function loginUserWithEmailAndPassword(email, password) {
  const data = {
    grant_type: 'password',
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    email,
    password,
  };
  return myAxios
    .post(LOGIN_URL, data)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}

export async function requestAccessTokenWithRefreshToken(refreshToken) {
  const data = {
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  };
  return myAxios
    .post(LOGIN_URL, data)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}

export async function getCurrentUser(accessToken) {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return myAxios
    .get(CURRENT_USER_URL, config)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}
