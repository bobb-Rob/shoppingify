import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchItemsWithAccessToken } from '../../../api/itemApi';

export const fetchItems = createAsyncThunk(
  'items/getItems',
  async (accessToken, { rejectWithValue }) => {
    const response = await fetchItemsWithAccessToken(accessToken);
    if (response.errors) {
      return rejectWithValue(response.data);
    }
    return response;
  }
)

const initialState = {
  items: [],
  loading: false,
  error: false,
  errorMessages: [],  
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
      }
    }
  },
  extraReducers: {
    [fetchItems.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.errorMessages = [];
    },
    [fetchItems.fulfilled]: (state, action) => {      
      state.items = state.items.concat(action.payload);
      state.loading = false;
      state.error = false;
      state.errorMessages = [];
    },
    [fetchItems.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMessages = action.payload.errors;
    }
  },
});

export const { addItem } = itemsSlice.actions;

export default itemsSlice.reducer;