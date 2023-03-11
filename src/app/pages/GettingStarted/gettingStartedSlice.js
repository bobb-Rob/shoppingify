/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
// Use createAsyncThunk to create an async action creator to fetch default categories
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllDefaultCategories } from '../../api/gettingStartedAPI';

export const fetchDefaultCategories = createAsyncThunk(
  'gettingStarted/fetchDefaultCategories',
  async (accessToken) => {
    const response = await fetchAllDefaultCategories(accessToken);
    console.log('response.data', response);
    return response;
  },
);

// Use createSlice to create a slice of state
const initialState = {
  defaultCategories: [],
  loading: false,
  hasErrors: false,
};

const gettingStartedSlice = createSlice({
  name: 'gettingStarted/defaultCategories',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDefaultCategories.pending]: (state) => {
      state.loading = true;
    },
    [fetchDefaultCategories.fulfilled]: (state, { payload }) => {
      state.defaultCategories = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    [fetchDefaultCategories.rejected]: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export default gettingStartedSlice.reducer;
