import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import sessionReducer from './features/sessions/sessionSlice';
import shoppingListReducer from './features/dashboard/shoppingList/shoppingListSlice';
import itemReducer from './features/dashboard/items/itemSlice';
import historyReducer from './features/dashboard/history/historySlice';
import defaultCategoriesReducer from './features/dashboard/defaultCategories/defaultCategoriesSlice';

const store = configureStore({
  reducer: {
    session: sessionReducer,
    items: itemReducer,
    shoppingList: shoppingListReducer,
    history: historyReducer,
    defaultCategory: defaultCategoriesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
