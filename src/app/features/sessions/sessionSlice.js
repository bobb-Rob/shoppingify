/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  getCurrentUser,
  loginUserWithEmailAndPassword,
  requestAccessTokenWithRefreshToken,
} from '../../api/sessionApi';

function setRefreshToken(token) {
  localStorage.setItem('refreshToken', token);
}

function setCurrentUser(user) {
  // stringify the user object before storing it in localStorage
  user = JSON.stringify(user);
  localStorage.setItem('currentUser', user);
}

// function removeRefreshToken() {
//   localStorage.removeItem('refreshToken');
// }

function getRefreshToken() {
  const token = localStorage.getItem('refreshToken');
  return token;
}

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
    const response = await createUserWithEmailAndPassword(payload);
    if (response.error) {
      return rejectWithValue(response.error);
    }
    return response;
  },
);

export const loginUser = createAsyncThunk(
  'session/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    const response = await loginUserWithEmailAndPassword(email, password);

    if (response.error) {
      return rejectWithValue(response.error);
    }

    const userResponse = await getCurrentUser(response.access_token);
    if (userResponse.errors) {
      return rejectWithValue(userResponse.data);
    }
    return { ...response, ...userResponse };
  },
);

// Fetch current user
export const fetchCurrentUser = createAsyncThunk(
  'session/fetchCurrentUser',
  async (accessToken, { rejectWithValue }) => {
    const response = await getCurrentUser(accessToken);
    if (response.errors) {
      return rejectWithValue(response.error);
    }
    return response;
  },
);

const initialState = {
  currentUser: {
    id: undefined,
    email: undefined,
    first_name: undefined,
    last_name: undefined,
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

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    sessionClearErrors(state) {
      state.error = false;
      state.errorMessages = [];
    },
  },
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
          first_name: action.payload.first_name,
          last_name: action.payload.last_name,
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
        state.errorMessages = action.payload;
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
          first_name: action.payload.first_name,
          last_name: action.payload.last_name,
          role: action.payload.role,
          createdAt: action.payload.created_at,
        };
        setRefreshToken(action.payload.refresh_token);
        setCurrentUser(current(state).currentUser);
        state.loading = false;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        if (action.payload === 'invalid_grant') {
          state.errorMessages.push('Wrong email or password');
        }
      })
      .addCase(fetchCurrentUser.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.currentUser = {
          id: action.payload.id,
          email: action.payload.email,
          first_name: action.payload.first_name,
          last_name: action.payload.last_name,
          role: action.payload.role,
          createdAt: action.payload.created_at,
        };
        state.loading = false;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(fetchCurrentUser.rejected, (state) => {
        state.loading = false;
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
      });
  },
});

export default sessionSlice.reducer;
export const { sessionClearErrors } = sessionSlice.actions;
