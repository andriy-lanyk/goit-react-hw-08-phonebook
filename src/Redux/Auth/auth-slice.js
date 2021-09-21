import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: { login: false, register: false },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error.login = false;
      state.error.register = false;
    },
    [authOperations.register.pending](state) {
      state.error.login = false;
      state.error.register = false;
      state.isLoading = true;
    },
    [authOperations.register.rejected](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error.login = false;
      state.error.register = true;
    },
    [authOperations.login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error.login = false;
      state.error.register = false;
    },
    [authOperations.login.pending](state) {
      state.error.login = false;
      state.error.register = false;
      state.isLoading = true;
    },
    [authOperations.login.rejected](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error.login = true;
      state.error.register = false;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error.login = false;
      state.error.register = false;
    },
    [authOperations.logOut.pending](state) {
      state.error.login = false;
      state.error.register = false;
    },
    [authOperations.logOut.rejected](state) {
      state.error.login = false;
      state.error.register = false;
      state.isLoading = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error.login = false;
      state.error.register = false;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.error.login = false;
      state.error.register = false;
      state.isLoading = true;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.error.login = false;
      state.error.register = false;
      state.isLoading = false;
    },
  },
});

export default authSlice.reducer;
