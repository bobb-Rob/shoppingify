import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllListWithAccessToken } from '../../../api/historyApi';

export const fetchAllList = createAsyncThunk(
  'lists/getActiveList',
  async (accessToken, { rejectWithValue }) => {
    const response = await fetchAllListWithAccessToken(accessToken);
    if (response.errors) {
      return rejectWithValue(response.data);
    }
    return response;
  },
);

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
});

export default historySlice.reducer;
