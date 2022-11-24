import myAxios from './myAxios';

const fetchItemsUrl = '/categories';
const createCategoryUrl = '/categories';
const createItemUrl = '/items';

export async function fetchItemsWithAccessToken(accessToken) {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return myAxios
    .get(fetchItemsUrl, config)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}

export async function createCategoryWithAccessToken(data, accessToken) {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: data
  };

  return myAxios
    .post(createCategoryUrl, config)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}
