import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rightDisplayReducer from './RSidebarReducers/RSidebarReducers';
import ItemListReducers from './ItemList/ItemListReducers';
import userReducer from './user/userSlice';

const store = configureStore({
  reducer: {
    RSidebarReducers: rightDisplayReducer,
    list: ItemListReducers,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
