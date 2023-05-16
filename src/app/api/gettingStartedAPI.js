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

// Create new Categories and Items from Default_categories and default_items
export function createDefaultCategoriesAndItems(accessToken, selectedCategoriesIds) {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return myAxios
    .post(defaultCategoriesUrl, { selectedCategoriesIds }, config)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}
