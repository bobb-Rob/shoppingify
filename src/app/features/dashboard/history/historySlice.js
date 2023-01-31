/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllListWithAccessToken } from '../../../api/historyApi';

export const fetchAllList = createAsyncThunk(
  'lists/getAllList',
  async (accessToken, { rejectWithValue }) => {
    const response = await fetchAllListWithAccessToken(accessToken);
    if (response.errors) {
      return rejectWithValue(response.data);
    }
    return response;
  },
);

const transformListArray = (items) => {
  const grouped = items.reduce((acc, item) => {
    const date = new Date(item.created_at);
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const key = `${month} ${year}`;

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(item);
    return acc;
  }, {});

  return Object.entries(grouped).map(([key, values]) => ({
    month: key,
    lists: values,
  }));
};

const initialState = {
  lists: [],
  loading: false,
  error: false,
  errorMessages: [],
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllList.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.errorMessages = [];
    },
    [fetchAllList.fulfilled]: (state, action) => {
      state.lists = action.payload;
      const newList = transformListArray(action.payload);
      console.log(newList);
      state.loading = false;
      state.error = false;
      state.errorMessages = [];
    },
    [fetchAllList.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMessages = action.payload.errors;
    },
  },
});

export default historySlice.reducer;
