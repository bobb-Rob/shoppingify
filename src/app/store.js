import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import sessionReducer from './features/sessions/sessionSlice';
import shoppingListReducer from './features/dashboard/shoppingList/shoppingListSlice';
import itemReducer from './features/dashboard/items/itemSlice';

const store = configureStore({
  reducer: {
    session: sessionReducer,
    items: itemReducer,
    shoppingList: shoppingListReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
