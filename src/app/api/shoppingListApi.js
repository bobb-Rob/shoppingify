/* eslint-disable */
import myAxios from './myAxios';

const fetchActiveListUrl = '/list/active';
const itemRecordsUrl = '/records';
const listUrl = '/lists';

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

// Update item/record completed
export async function updateItemCompletedWithAccessToken({ recordId, newCompleted }, accessToken) {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return myAxios
    .patch(`${itemRecordsUrl}/${recordId}`, newCompleted, config)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}

// Update activelist name
export async function updateListNameWithAccessToken({ listId, newName }, accessToken) {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return myAxios
    .patch(`${listUrl}/${listId}`, newName, config)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}

// Update activelist name
export async function updateListStatusWithAccessToken({ listId, newStatus }, accessToken) {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return myAxios
    .patch(`${listUrl}/${listId}`, newStatus, config)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}

// Create ActiveList
export async function createActiveListWithAccessToken(activeList, accessToken) {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return myAxios
    .post(listUrl, activeList, config)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}
