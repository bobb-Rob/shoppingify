/* eslint-disable */
import myAxios from './myAxios';

const fetchActiveListUrl = '/list/active';

// Fetch all list
export function fetchActiveListWithAccessToken(accessToken) {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return myAxios
    .get(fetchActiveListUrl, config)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}
