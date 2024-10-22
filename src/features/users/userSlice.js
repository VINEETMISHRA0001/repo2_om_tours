import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authLoginUser } from '../../services/apiUsers';

const initialState = {
  user: null,
  isAuthenticated: false,
  error: '',
  status: 'idle',
  accessToken: null,
  role: '',
  presist: JSON.parse(localStorage.getItem('presist')) || false,
};

export const authenticateUser = createAsyncThunk(
  'user/authUser',
  async function ({ presist, ...userCredentials }) {
    const response = await authLoginUser(userCredentials);

    const { user, accessToken } = response;

    const { role } = user;

    localStorage.setItem('userRole', role);
    localStorage.setItem('token', accessToken);
    localStorage.setItem('presist', presist);

    return { user, accessToken, role, presist };
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },

    loginVerifiedUser: {
      prepare(user, accessToken) {
        console.log('logged in verified user', user);
        return {
          payload: {
            user,
            accessToken,
          },
        };
      },
      reducer(state, action) {
        state.user = action.payload.user;
        state.accessToken = action.payload.token;
        state.isAuthenticated = true;
        state.role = action.payload.role;
      },
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.accessToken = null;
      state.status = 'idle';
      state.role = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticateUser.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(authenticateUser.fulfilled, (state, action) => {
        console.log('addCase', state);
        state.user = action.payload.user;
        state.isAuthenticated = true;
        state.status = 'idle';
        state.accessToken = action.payload.accessToken;
        state.role = action.payload.role;
        state.presist = action.payload.presist;
      })
      .addCase(authenticateUser.rejected, (state, action) => {
        state.error = action.payload;
        state.status = 'idle';
      });
  },
});

export const { registerUser, logout, loginVerifiedUser } = userSlice.actions;
export default userSlice.reducer;
