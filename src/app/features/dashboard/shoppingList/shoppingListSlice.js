/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shoppingList: [],
  editingMode: true,
  status: 'idle',
  error: null,
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
  },
  extraReducers: {},
});

export const { addItem, displayItemDetails, switchEditingMode } = shoppingListSlice.actions;

export default shoppingListSlice.reducer;
