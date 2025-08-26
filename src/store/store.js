import { configureStore, createSlice } from '@reduxjs/toolkit';

// Simple user slice for storing profile data
const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: ''
  },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    }
  }
});

export const { setUser } = userSlice.actions;

// Create store
export const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
});