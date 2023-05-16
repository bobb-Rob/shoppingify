/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createDefaultCategoriesAndItems, fetchAllDefaultCategories } from '../../api/gettingStartedAPI';

export const fetchDefaultCategories = createAsyncThunk(
  'gettingStarted/fetchDefaultCategories',
  async (accessToken) => {
    const response = await fetchAllDefaultCategories(accessToken);
    return response;
  },
);

export const createNewDefaultCategoriesAndItems = createAsyncThunk(
  'gettingStarted/createNewDefaultCategoriesAndItems',
  async ({ accessToken, selectedCategoriesIds }, { rejectWithValue }) => {
    console.log('selectedCategoriesIds: ', selectedCategoriesIds);
    const response = await createDefaultCategoriesAndItems(accessToken, selectedCategoriesIds);
    if (response.error) {
      return rejectWithValue(response.error);
    }
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
