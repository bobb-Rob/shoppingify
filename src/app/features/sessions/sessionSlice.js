/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, getCurrentUser, loginUserWithEmailAndPassword, requestAccessTokenWithRefreshToken } from '../../api/sessionApi';

function setRefreshToken(token) {
  localStorage.setItem('refreshToken', token);
}

// function removeRefreshToken() {
//   localStorage.removeItem('refreshToken');
// }

function getRefreshToken() {
  const token = localStorage.getItem('refreshToken');
  return token;
}

const initialState = {
  currentUser: {
    id: undefined,
    email: undefined,
    role: undefined,
    createdAt: undefined,
  },
  loading: true,
  accessToken: undefined,
  error: false,
  errorMessages: [],
  refreshToken: getRefreshToken(),
  expiresIn: undefined,
  tokenType: undefined,
};

export const refreshAccessToken = createAsyncThunk(
  'session/refreshAccessToken',
  async (refreshToken, { rejectWithValue }) => {
    if (!refreshToken) {
      return rejectWithValue('No refresh token');
    }

    const refreshResponse = await requestAccessTokenWithRefreshToken(refreshToken);

    if (refreshResponse.errors) {
      return rejectWithValue(refreshResponse.data);
    }

    const userResponse = await getCurrentUser(refreshResponse.access_token);
    if (userResponse.errors) {
      return rejectWithValue(userResponse.data);
    }
    return { ...refreshResponse, ...userResponse };
  },
);

export const signUpUser = createAsyncThunk(
  'session/signUpUser',
  async (payload, { rejectWithValue }) => {
    const response = await createUserWithEmailAndPassword(
      payload.email,
      payload.password,
    );
    if (response.error) {
      return rejectWithValue(response.error);
    }
    console.log(response);
    return response;
  },
);

export const loginUser = createAsyncThunk(
  'session/loginUser',
  async (payload, { rejectWithValue }) => {
    const response = await loginUserWithEmailAndPassword(
      payload.email,
      payload.password,
    );

    if (response.error) {
      return rejectWithValue(response.error);
    }
    return response;
  },
);

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.accessToken = action.payload.access_token;
        state.refreshToken = action.payload.refresh_token;
        state.expiresIn = action.payload.expires_in;
        state.tokenType = action.payload.token_type;
        state.currentUser = {
          id: action.payload.id,
          email: action.payload.email,
          role: action.payload.role,
          createdAt: action.payload.created_at,
        };
        setRefreshToken(action.payload.refresh_token);
        state.loading = false;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorMessages = action.payload.errors;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.accessToken = action.payload.access_token;
        state.refreshToken = action.payload.refresh_token;
        state.expiresIn = action.payload.expires_in;
        state.tokenType = action.payload.token_type;
        state.currentUser = {
          id: action.payload.id,
          email: action.payload.email,
          role: action.payload.role,
          createdAt: action.payload.created_at,
        };
        setRefreshToken(action.payload.refresh_token);
        state.loading = false;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorMessages = action.payload.errors;
      })
      .addCase(refreshAccessToken.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(refreshAccessToken.fulfilled, (state, action) => {
        state.accessToken = action.payload.access_token;
        state.refreshToken = action.payload.refresh_token;
        state.expiresIn = action.payload.expires_in;
        state.currentUser = {
          id: action.payload.id,
          email: action.payload.email,
          role: action.payload.role,
          createdAt: action.payload.created_at,
        };
        setRefreshToken(action.payload.refresh_token);
        state.loading = false;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(refreshAccessToken.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default sessionSlice.reducer;
