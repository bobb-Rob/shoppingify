import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import sessionReducer from './features/sessions/sessionSlice';
import shoppingListReducer from './features/dashboard/shoppingList/shoppingListSlice';
import itemReducer from './features/dashboard/items/itemSlice';
// import rightDisplayReducer from '../redux/RSidebarReducers/RSidebarReducers';
// import ItemListReducers from '../redux/ItemList/ItemListReducers';
// import userReducer from '../redux/user/userSlice';

const store = configureStore({
  reducer: {
    session: sessionReducer,
    shoppingList: shoppingListReducer,
    items: itemReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
