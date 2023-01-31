import myAxios from './myAxios';

const listUrl = '/lists';

// Fetch all list
export function fetchAllListWithAccessToken(accessToken) {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return myAxios
    .get(listUrl, config)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}

export function fetchCancelledList(accessToken) {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return myAxios
    .get(listUrl, config)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}
