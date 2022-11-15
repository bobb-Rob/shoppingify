// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import setJwtToken from './saveJwtToken';

// export const registerUser = createAsyncThunk(
//   'user/registerUser',
//   async (user, { rejectWithValue }) => {
//     try {
//       const response = await fetch('http://localhost:3001/users', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ user }),
//       });
//       setJwtToken(response, 'signupToken');
//       const data = await response.json();
//       return data;
//     } catch (err) {
//       return rejectWithValue(err);
//     }
//   },
// );

// export const loginUser = createAsyncThunk(
//   'user/loginUser',
//   async (user, { rejectWithValue }) => {
//     try {
//       const response = await fetch('http://localhost:3001/users/sign_in', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ user }),
//       });
//       setJwtToken(response, 'loginToken');
//       const data = await response.json();
//       return data;
//     } catch (err) {
//       return rejectWithValue(err);
//     }
//   },
// );

// const initialState = {
//   email: '',
//   password: '',
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [registerUser.fulfilled]: (state, action) => {
//       const newState = {
//         ...state,
//         user: action.payload,
//       };
//       return newState;
//     },
//     [registerUser.rejected]: (state, action) => {
//       const newState = {
//         ...state,
//         user: action.payload.error,
//       };
//       return newState;
//     },
//     [loginUser.fulfilled]: (state, action) => {
//       const newState = {
//         ...state,
//         user: action.payload,
//       };
//       return newState;
//     },
//   },
// });

// export default userSlice.reducer;
