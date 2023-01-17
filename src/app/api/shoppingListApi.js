/* eslint-disable */
import myAxios from './myAxios';

const fetchActiveListUrl = '/list/active';
const itemRecordsUrl = '/records';

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
    .post(itemRecordsUrl, item, config)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}

// Delete Item/record from activeList
export async function deleteItemFromActiveLIstWithAccessToken(id, accessToken) {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return myAxios
    .delete(`${itemRecordsUrl}/${id}`, config)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}

// Update item/record quantity
export async function updateItemQtyWithAccessToken({ recordId, newQty }, accessToken) {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return myAxios
    .patch(`${itemRecordsUrl}/${recordId}`, newQty, config)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}
