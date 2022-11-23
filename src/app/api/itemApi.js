import myAxios from './myAxios';

const itemsUrl = '/categories';

export async function fetchItemsWithAccessToken(accessToken) {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return myAxios
    .get(itemsUrl, config)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}
