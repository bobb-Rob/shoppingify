import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.SHOPPINGIFY_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
    withCredentials: true,
  },
});

export default instance;