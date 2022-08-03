import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

const rightDisplaySlice = createSlice({
  name: 'isDisplayed',
  initialState,
  reducers: {
    showAddItemForm(state) {
      const myState = { ...state };
      myState.isDisplayed = 'addItemForm';
      return myState;
    },
  },
});

export const { showAddItemForm } = rightDisplaySlice.actions;
export default rightDisplaySlice.reducer;
