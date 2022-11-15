import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import sessionReducer from './features/sessions/sessionSlice';
// import rightDisplayReducer from '../redux/RSidebarReducers/RSidebarReducers';
// import ItemListReducers from '../redux/ItemList/ItemListReducers';
// import userReducer from '../redux/user/userSlice';

const store = configureStore({
  reducer: {
    session: sessionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
