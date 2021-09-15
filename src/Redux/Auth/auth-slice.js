import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.register.pending](state) {
      state.error = false;
    },
    [authOperations.register.rejected](state) {
      state = { ...initialState, error: true };
    },
    [authOperations.login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.login.pending](state) {
      state.error = false;
    },
    [authOperations.login.rejected](state) {
      state = { ...initialState, error: true };
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.logOut.pending](state) {
      state.error = false;
    },
    [authOperations.logOut.rejected](state) {
      state.error = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.error = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.error = true;
    },
  },
});

export default authSlice.reducer;
