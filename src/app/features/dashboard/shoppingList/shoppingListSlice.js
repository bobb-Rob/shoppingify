import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  shoppingList: {
    items: [],
    total: 0,
    totalItems: 0,
  },
  status: "idle",
  error: null,
  errorMessages: [],
  isDisplayed: "shoppingList",
};

const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.shoppingList.items.find(
        (item) => item.id === newItem.id
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
    }
  },
  extraReducers: {},
});

export const { addItem } = shoppingListSlice.actions;

export default shoppingListSlice.reducer;
