import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import { createItemWithCategoryAndAccessToken, createNewCategoryAndItemWithAccessToken, deleteEmptyCategoryWithAccessToken, deleteItemWithAccessToken, fetchItemsWithAccessToken } from '../../../api/itemApi';
import store from '../../../store';

export const fetchItems = createAsyncThunk(
  'items/getItems',
  async (accessToken, { rejectWithValue }) => {
    const response = await fetchItemsWithAccessToken(accessToken);
    if (response.errors) {
      return rejectWithValue(response.data);
    }
    return response;
  }
);

export const createCategoryAndItem = createAsyncThunk(
  'items/createCategoryAndItem',
  async (data, { rejectWithValue }) => {
    const accessToken = store.getState().session.accessToken;
    const response = await createNewCategoryAndItemWithAccessToken(data, accessToken);
    console.log(response);
    if (response.errors) {
      return rejectWithValue(response.data);
    }
    return response;
  }
)

export const createItem = createAsyncThunk(
  'items/createItem',
  async ({item, accessToken }, { rejectWithValue }) => {
    const response = await createItemWithCategoryAndAccessToken(item, accessToken);
    if (response.errors) {
      return rejectWithValue(response.errors);
    }
    return response;
  }
);

export const deleteItem = createAsyncThunk(
  'items/deleteItem',
  async (itemId, { rejectWithValue }) => {
    const accessToken = store.getState().session.accessToken;
    const response = await deleteItemWithAccessToken(itemId, accessToken);
    if (response.errors) {
      return rejectWithValue(response.errors);
    }
    return { ...response, id: itemId };
  }
);

// Implement category delete if category is empty
export const deleteEmptyCategory = createAsyncThunk(
  'items/deleteEmptyCategory',
  async (categoryId, { rejectWithValue }) => {
    const accessToken = store.getState().session.accessToken;
    const response = await deleteEmptyCategoryWithAccessToken(categoryId, accessToken);
    if (response.errors) {
      return rejectWithValue(response.errors);
    }
    return { ...response, id: categoryId };
  }
);

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
    },
    [createCategoryAndItem.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.errorMessages = [];
    },
    [createCategoryAndItem.fulfilled]: (state, action) => {
      const newItem = {
        id: action.payload.id,
        name: action.payload.name,
        image: action.payload.image,
        note: action.payload.note,
        category_name: action.payload.category_name,
      };
      const category = {
        ...action.payload.category,
        items: [newItem],
      }
      state.items.push(category);
      state.loading = false;
      state.error = false;
      state.errorMessages = [];
    },
    [createCategoryAndItem.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMessages = action.payload;
    },
    [createItem.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.errorMessages = [];
    },
    [createItem.fulfilled]: (state, action) => {
      const newItem = {
        id: action.payload.id,
        name: action.payload.name,
        image: action.payload.image,
        note: action.payload.note,
        category_name: action.payload.category_name,
      };
      const category = state.items.find((item) => current(item).name === newItem.category_name);
      if (category) {
        category.items.push(newItem);
      }
      state.loading = false;
      state.error = false;
      state.errorMessages = [];
    },
    [createItem.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMessages = action.payload;
    },
    [deleteItem.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.errorMessages = [];
    },
    [deleteItem.fulfilled]: (state, action) => {
      const itemId = action.payload.id;
      const category = state.items.find((item) => item.items.find((item) => item.id === itemId));
      if (category) {
        category.items = category.items.filter((item) => item.id !== itemId);
      }
      state.loading = false;
      state.error = false;
      state.errorMessages = [];
    },
    [deleteItem.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMessages = action.payload;
    },
    [deleteEmptyCategory.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.errorMessages = [];
    },
    [deleteEmptyCategory.fulfilled]: (state, action) => {
      const categoryId = action.payload.id;
      state.items = state.items.filter((item) => item.id !== categoryId);
      state.loading = false;
      state.error = false;
      state.errorMessages = [];
    },
    [deleteEmptyCategory.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMessages = action.payload;
    },
  },
});

export const { addItem } = itemsSlice.actions;

export default itemsSlice.reducer;