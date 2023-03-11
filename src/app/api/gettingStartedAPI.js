import myAxios from './myAxios';

const defaultCategoriesUrl = '/default_categories';

// Fetch all default categories
export function fetchAllDefaultCategories(accessToken) {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return myAxios
    .get(defaultCategoriesUrl, config)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}

export function number() {
  return 2;
}
