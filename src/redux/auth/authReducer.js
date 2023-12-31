import { createSlice } from '@reduxjs/toolkit';

const state = {
  userId: null,
  login: null,
  email: null,
  stateChange: false,
};

const actions = {
  updateUserProfile: (state, { payload }) => ({
    ...state,
    userId: payload.userId,
    login: payload.name,
    email: payload.email,
  }),
  authStateChange: (state, { payload }) => ({
    ...state,
    stateChange: payload.stateChange,
  }),
  authSignOut: () => state,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: state,
  reducers: actions,
});
