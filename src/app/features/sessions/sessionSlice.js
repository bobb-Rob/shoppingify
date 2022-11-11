import { createSlice, createAsyncThunk } from 'redux-toolkit';

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

const signUpUser = createAsyncThunk(
  'session/signUpUser',
  async (payload, { rejectWithValue }) => {
    const response = await createUserWithEmailAndPassword(
      payload.email,
      payload.password
    );
    if (response.errors) {
      return rejectWithValue(response.errors);
    }
    return response.data;
  }
);

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state, action) => {
        state.loading = true;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.expiresIn = action.payload.expiresIn;
        state.tokenType = action.payload.tokenType;
        state.currentUser.id = action.payload.id;
        state.currentUser.email = action.payload.email;
        state.currentUser.role = action.payload.role;
        state.currentUser.createdAt = action.payload.createdAt;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorMessages = action.payload.errors;
      })
      .addCase('session/logout/pending', (state, action) => {
        state.loading = true;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase('session/logout/fulfilled', (state, action) => {
        state.loading = false;
        state.accessToken = undefined;
        state.refreshToken = undefined;
        state.expiresIn = undefined;
        state.tokenType = undefined;
        state.currentUser.id = undefined;
        state.currentUser.email = undefined;
        state.currentUser.role = undefined;
        state.currentUser.createdAt = undefined;
      })
      .addCase('session/logout/rejected', (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorMessages = action.payload;
      });
  },
});

export default sessionSlice.reducer;

function setRefreshToken(token) {
  localStorage.setItem('refreshToken', token);
}

function removeRefreshToken() {
  localStorage.removeItem('refreshToken');
}

function getRefreshToken() {
  const token = localStorage.getItem('refreshToken');
  return token;
}
