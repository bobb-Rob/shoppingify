import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import { createCategoryWithNameAndAccessToken, createItemWithCategoryAndAccessToken, fetchItemsWithAccessToken } from '../../../api/itemApi';
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
  async (arrayOfRequest, { rejectWithValue }) => {
    const accessToken = store.getState().session.accessToken;
    const response = await createCategoryWithNameAndAccessToken(arrayOfRequest[0], accessToken);
    console.log(response);
    if (response.errors) {
      return rejectWithValue(response.data);
    }

    const item = arrayOfRequest[1];
    const setCategory = async (item) => {
      const category = response;
      return {...item, category_id: category.id};
    }
    const newItem = await setCategory(item);
    console.log(newItem);
    const response2 = await createItemWithCategoryAndAccessToken(newItem, accessToken);
    console.log(response2);
    if (response2.errors) {
      return rejectWithValue(response2.data);
    }
    return response2;
  }
)

// export const createCategory = createAsyncThunk(
//   'items/createCategory',
//   async (data, { rejectWithValue }) => {
//     console.log(data);
//     const { category, accessToken } = data;
//     const response = await createCategoryWithNameAndAccessToken(category, accessToken);
//     if (response.errors) {
//       return rejectWithValue(response.errors);
//     }    
//     return response;
//   }
// )

export const createItem = createAsyncThunk(
  'items/createItem',
  async ({item, accessToken }, { rejectWithValue }) => {
    const response = await createItemWithCategoryAndAccessToken(item, accessToken);
    if (response.errors) {
      return rejectWithValue(response.errors);
    }
    return response;
  }
)
// export const createCategoryAndItem = async (arrayOfRequest, accessToken) => {
//   // const promises = arrayOfRequest.map(async (obj) => {
//   //   console.log(obj);
//   //   const data = { ...obj.category, accessToken}
//   //   const newCategory = await store.dispatch(createCategory(data));
//   //   console.log(newCategory);
//   //   // obj.item.category_id = newCategory.id;
//   //   // const setCategory = (item) => item.category_id = newCategory.id; 
//   //   // const newItem = await setCategory(obj.item);
//   //   // const item = await store.dispatch(createItem({ ...newItem, accessToken}));
//   //   // return item;
//   // });

//   const newCategory = await store.dispatch(createCategory({ category: arrayOfRequest[0], accessToken}));
//   console.log(newCategory);

//   const promises = [newCategory];

//   const res = await Promise.all(promises);
//   console.log(res);
// }





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
    // [createCategory.pending]: (state) => {
    //   state.loading = true;
    //   state.error = false;
    //   state.errorMessages = [];
    // },
    // [createCategory.fulfilled]: (state, action) => {
    //   state.items = state.items.concat(action.payload);
    //   state.loading = false;
    //   state.error = false;
    //   state.errorMessages = [];
    // },
    // [createCategory.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.error = true;
    //   state.errorMessages = action.payload;
    // },
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
  },
});

export const { addItem } = itemsSlice.actions;

export default itemsSlice.reducer;