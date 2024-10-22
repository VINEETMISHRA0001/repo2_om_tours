import { createSlice } from '@reduxjs/toolkit';
// userContext.jsx or wherever you're using getUserFromLocalStorage
const getUserFromLocalStorage = () => {
  const userJSON = localStorage.getItem('user');

  if (!userJSON) {
    return null; // Handle case where no user data is found
  }

  try {
    const user = JSON.parse(userJSON);
    return user;
  } catch (error) {
    console.error('Error parsing user JSON:', error);
    return null; // Handle parsing errors
  }
};

// userSlice.js or userSlice.jsx

const initialState = {
  user: getUserFromLocalStorage(), // Initialize with user from localStorage
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    clearUser: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
