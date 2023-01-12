/* eslint-disable */
import myAxios from './myAxios';

const fetchActiveListUrl = '/list/active';
const addItemToActiveListUrl = '/records';

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

// Add item to activeList, Create records
export async function AddItemToActiveListWithAccessToken(item, accessToken) {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return myAxios
    .post(addItemToActiveListUrl, item, config)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}