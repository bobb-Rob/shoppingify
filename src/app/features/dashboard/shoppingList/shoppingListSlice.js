/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import groupBy from 'lodash.groupby';
import {
  AddItemToActiveListWithAccessToken,
  createActiveListWithAccessToken,
  deleteItemFromActiveLIstWithAccessToken,
  fetchActiveListWithAccessToken,
  updateItemCompletedWithAccessToken,
  updateItemQtyWithAccessToken,
  updateListNameWithAccessToken,
  updateListStatusWithAccessToken,
} from '../../../api/shoppingListApi';

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

export const addItemToActiveList = createAsyncThunk(
  'lists/additemToList',
  async ({ newRecord, accessToken }, { rejectWithValue }) => {
    const response = await AddItemToActiveListWithAccessToken(newRecord, accessToken);
    if (response.errors) {
      return rejectWithValue(response.errors);
    }
    return response;
  },
);

export const deleteItemFromActiveList = createAsyncThunk(
  'lists/deleteItem',
  async ({ recordId, accessToken }, { rejectWithValue }) => {
    const response = await deleteItemFromActiveLIstWithAccessToken(recordId, accessToken);
    if (response.errors) {
      return rejectWithValue(response.errors);
    }
    return { ...response, id: recordId };
  },
);

export const updateItemQty = createAsyncThunk(
  'lists/updateItemQty',
  async ({ recordId, newQty, accessToken }, { rejectWithValue }) => {
    const response = await updateItemQtyWithAccessToken({ recordId, newQty }, accessToken);
    if (response.errors) {
      return rejectWithValue(response.errors);
    }
    return { ...response, id: recordId };
  },
);

export const updateItemCompleted = createAsyncThunk(
  'lists/updateItemCompleted',
  async ({ recordId, newCompleted, accessToken }, { rejectWithValue }) => {
    const response = await updateItemCompletedWithAccessToken({
      recordId,
      newCompleted,
    }, accessToken);

    if (response.errors) {
      return rejectWithValue(response.errors);
    }
    return { ...response, id: recordId };
  },
);

export const updateListName = createAsyncThunk(
  'lists/updateListName',
  async ({ listId, newName, accessToken }, { rejectWithValue }) => {
    const response = await updateListNameWithAccessToken({ listId, newName }, accessToken);
    if (response.errors) {
      return rejectWithValue(response.errors);
    }
    return { ...response, id: listId };
  },
);

export const updateListStatus = createAsyncThunk(
  'lists/updateListStatus',
  async ({ listId, newStatus, accessToken }, { rejectWithValue }) => {
    const response = await updateListStatusWithAccessToken({ listId, newStatus }, accessToken);
    if (response.errors) {
      return rejectWithValue(response.errors);
    }
    return { ...response, id: listId };
  },
);

export const createActiveList = createAsyncThunk(
  'items/createItem',
  async ({ activeList, accessToken }, { rejectWithValue }) => {
    const response = await createActiveListWithAccessToken(activeList, accessToken);
    if (response.errors) {
      return rejectWithValue(response.errors);
    }
    return response;
  },
);

const alphabetically = (a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};

const transformActiveListData = (records) => {
  const groupedRecords = groupBy(records, 'item.categoryName');
  return Object.entries(groupedRecords).map(([key, value]) => ({
    name: key,
    items: value.map(({ item }) => ({
      ...item,
    })).sort(alphabetically),
  }));
};

const initialState = {
  activeList: {
    name: '',
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
      state.activeList.name = action.payload;
    },
    shopListClearError(state) {
      state.error = false;
      state.errorMessages = [];
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
    [createActiveList.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.errorMessages = [];
    },
    [createActiveList.fulfilled]: (state, action) => {
      state.activeList = action.payload;
      state.activeList.items = [];
      state.loading = false;
      state.error = false;
      state.errorMessages = [];
    },
    [createActiveList.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMessages = action.payload.errors;
    },
    [addItemToActiveList.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.errorMessages = [];
    },
    [addItemToActiveList.fulfilled]: (state, action) => {
      const newItem = action.payload.item;
      const category = state.activeList.items.find((item) => {
        const stateCategoryName = current(item).name;
        return stateCategoryName === newItem?.categoryName;
      });

      if (category) {
        category.items.push(newItem);
      } else {
        state.activeList.items.push({
          name: newItem.categoryName,
          items: [newItem],
        });
      }
      state.loading = false;
      state.error = false;
      state.errorMessages = [];
    },
    [addItemToActiveList.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMessages = action.payload?.item_id;
    },
    [deleteItemFromActiveList.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.errorMessages = [];
    },
    [deleteItemFromActiveList.fulfilled]: (state, action) => {
      const deletedItemID = action.payload.deleted_record.item_id;
      const categoryName = action.payload.item_category_name;
      const category = state.activeList.items.find((category) => category.name === categoryName);
      category.items = category.items.filter((item) => item.id !== deletedItemID);
      if (category.items.length === 0) {
        state.activeList.items = state.activeList.items.filter((category) => (
          category.name !== categoryName));
      }

      state.loading = false;
      state.error = false;
      state.errorMessages = [];
    },
    [deleteItemFromActiveList.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMessages = action.payload?.errors;
    },
    [updateItemQty.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.errorMessages = [];
    },
    [updateItemQty.fulfilled]: (state, action) => {
      const { id, categoryName, quantity } = action.payload.item;
      const category = state.activeList.items.find((category) => category.name === categoryName);
      category.items = category.items.map((item) => {
        if (id === item.id) {
          return {
            ...item,
            quantity,
          };
        }
        return {
          ...item,
        };
      });

      state.loading = false;
      state.error = false;
      state.errorMessages = [];
    },
    [updateItemQty.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMessages = action.payload?.errors;
    },
    [updateItemCompleted.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.errorMessages = [];
    },
    [updateItemCompleted.fulfilled]: (state, action) => {
      const { id, categoryName, completed } = action.payload.item;
      const category = state.activeList.items.find((category) => category.name === categoryName);
      category.items = category.items.map((item) => {
        if (id === item.id) {
          return {
            ...item,
            completed,
          };
        }
        return {
          ...item,
        };
      });

      state.loading = false;
      state.error = false;
      state.errorMessages = [];
    },
    [updateItemCompleted.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMessages = action.payload?.errors;
    },
    [updateListName.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.errorMessages = [];
    },
    [updateListName.fulfilled]: (state, action) => {
      const { name } = action.payload;
      state.activeList.name = name;
      state.loading = false;
      state.error = false;
      state.errorMessages = [];
    },
    [updateListName.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMessages = action.payload?.errors;
    },
  },
});

export const {
  addItem,
  displayItemDetails,
  switchEditingMode,
  shopListClearError,
} = shoppingListSlice.actions;

export default shoppingListSlice.reducer;
