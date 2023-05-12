/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestDefaultCategories } from '../../../api/defaultCategoriesAPI';

export const fetchDefaultCategories = createAsyncThunk(
  'defaultCategories/fetchDefaultCategories',
  async (_, { rejectWithValue }) => {
    const response = await requestDefaultCategories();

    if (response.errors) {
      return rejectWithValue(response);
    }
    return response;
  },
);

const defaultCategoriesSlice = createSlice({
  name: 'defaultCategories',
  initialState: {
    defaultCategories: [],
    loading: false,
    error: false,
    errorMessages: [],
  },
  reducers: {},
  extraReducers: {
    [fetchDefaultCategories.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.errorMessages = [];
    },
    [fetchDefaultCategories.fulfilled]: (state, action) => {
      state.defaultCategories = action.payload;
      state.loading = false;
      state.error = false;
      state.errorMessages = [];
    },
    [fetchDefaultCategories.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMessages = action.payload;
    },
  },
});

export default defaultCategoriesSlice.reducer;
