import myAxios from './myAxios';

const fetchItemsUrl = '/categories';
const createCategoryUrl = '/categories';
const createItemUrl = '/items';
const deleteItemUrl = '/items';
const deleteCategoryUrl = '/categories';

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

// export async function createNewCategoryAndItemWithAccessToken(data, accessToken) {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     }
//   };

//   return myAxios
//   .post(createCategoryUrl, data.newCategory, config)
//   .then((response) => {
//     if (response.status === 201) {
//       data.item.category_id = response.data.id;
//       return myAxios
//       .post(createItemUrl, data.item, config)
//       .then((response) => { //Refactor this unnecessary nesting
//         if (response.status === 201) {
//           return response.data;
//         }
//       })
//       .catch((error) => error.response);
//     }
//   })
//   .catch((error) => error.response);
// }

export async function createNewCategoryAndItemWithAccessToken({ item, newCategory }, accessToken) {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return myAxios
    .post(createCategoryUrl, newCategory, config)
    .then((response) => {
      const newItem = { ...item };
      newItem.category_id = response.data.id;
      return myAxios.post(createItemUrl, newItem, config);
    }).then((response) => response.data)
    .catch((error) => error.response);
}

export async function createItemWithCategoryAndAccessToken(item, accessToken) {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return myAxios
    .post(createItemUrl, item, config)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}

export async function deleteItemWithAccessToken(id, accessToken) {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return myAxios
    .delete(`${deleteItemUrl}/${id}`, config)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}

export async function deleteEmptyCategoryWithAccessToken(id, accessToken) {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return myAxios
    .delete(`${deleteCategoryUrl}/${id}`, config)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}
