import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import sessionReducer from './features/sessions/sessionSlice';
import shoppingListReducer from './features/dashboard/shoppingList/shoppingListSlice';
import itemReducer from './features/dashboard/items/itemSlice';
import historyReducer from './features/dashboard/history/historySlice';
import defaultCategoryReducer from './pages/GettingStarted/gettingStartedSlice';

const store = configureStore({
  reducer: {
    session: sessionReducer,
    items: itemReducer,
    shoppingList: shoppingListReducer,
    history: historyReducer,
    defaultCategory: defaultCategoryReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
