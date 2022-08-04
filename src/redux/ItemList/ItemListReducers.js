import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

const itemListSlice = createSlice({
  name: 'itemList',
  initialState,
  reducers: {
    updateItems(state, action) {
      const myState = { ...state };
      myState.item = action.payload;
      return myState;
    },
    addtoList(state) {
      const myState = { ...state };
      myState.itemList = [...myState.itemList, myState.item];
      myState.item = initialState.item;
      return myState;
    },
  },
});

export const { updateItems, addtoList } = itemListSlice.actions;
export default itemListSlice.reducer;
