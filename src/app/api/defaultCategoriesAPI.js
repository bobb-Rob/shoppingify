import axios from 'axios';

const urlWithNoApi = process.env.REACT_APP_BACKEND_URL_NO_API;

export const requestDefaultCategories = async () => {
  const response = await axios.get(`${urlWithNoApi}/default_categories`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(response);
  if (response.errors) {
    return response.errors;
  }
  return response.data;
};

export const arr = [];
