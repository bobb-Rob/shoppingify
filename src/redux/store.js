import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rightDisplayReducer from './RSidebarReducers/RSidebarReducers';
import ItemListReducers from './ItemList/ItemListReducers';

const store = configureStore({
  reducer: {
    RSidebarReducers: rightDisplayReducer,
    list: ItemListReducers,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
