/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import groupBy from 'lodash.groupby';
import { fetchActiveListWithAccessToken } from '../../../api/shoppingListApi';

export const fetchActiveList = createAsyncThunk(
  'lists/getActiveList',
  async (accessToken, { rejectWithValue }) => {
    const response = await fetchActiveListWithAccessToken(accessToken);
    if (response.errors) {
      return rejectWithValue(response.data);
    }
    return response;
  },
);

const transformActiveListData = (records) => {
  const groupedRecords = groupBy(records, 'item.categoryName');
  return Object.entries(groupedRecords).map(([key, value]) => ({
    name: key,
    items: value.map(({ item }) => ({
      ...item,
    })),
  }));
};

const initialState = {
  activeList: {
    name: 'Shopping list',
    status: 'active',
    items: [],
  },
  editingMode: true,
  loading: false,
  error: false,
  errorMessages: [],
  isDisplayed: 'shoppingList',
};

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.shoppingList.items.find(
        (item) => item.id === newItem.id,
      );
      state.shoppingList.totalItems++;
      state.shoppingList.total += newItem.price;
      if (!existingItem) {
        state.shoppingList.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
      }
    },
    displayItemDetails(state) {
      state.isDisplayed = 'showItemDetails';
    },
    switchEditingMode(state) {
      state.editingMode = !state.editingMode;
    },
    updateListName(state, action) {
      state.list.name = action.payload;
    },
  },
  extraReducers: {
    [fetchActiveList.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.errorMessages = [];
    },
    [fetchActiveList.fulfilled]: (state, action) => {
      state.activeList = action.payload;
      state.activeList.items = transformActiveListData(action.payload.records);
      state.loading = false;
      state.error = false;
      state.errorMessages = [];
    },
    [fetchActiveList.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMessages = action.payload.errors;
    },
  },
});

export const {
  addItem,
  displayItemDetails,
  switchEditingMode,
  updateListName,
} = shoppingListSlice.actions;

export default shoppingListSlice.reducer;
