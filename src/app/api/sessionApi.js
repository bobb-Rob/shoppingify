import axios from 'axios';

const LOGIN_URL = process.env.SHOPPINGIFY_BACKEND_URL + '/users/sign_in';
const LOGOUT_URL = process.env.SHOPPINGIFY_BACKEND_URL + '/users/sign_out';
const SIGNUP_URL = process.env.SHOPPINGIFY_BACKEND_URL + '/users';
const CURRENT_USER = process.env.SHOPPINGIFY_BACKEND_URL + '/users/current';
