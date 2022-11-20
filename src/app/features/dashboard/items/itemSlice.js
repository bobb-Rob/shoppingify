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
  status: 'idle',
  error: null,
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
  extraReducers: {},
});

export const { addItem } = itemsSlice.actions;

export default itemsSlice.reducer;