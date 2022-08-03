import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rightDisplayReducer from './AddItemReducers/AddItemReducers';

const store = configureStore({
  reducer: {
    isDisplayedReducer: rightDisplayReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
