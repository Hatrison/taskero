import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser } from "./operations";
import { fetchCurrentUser } from "@/redux/user/operations";

type AuthState = {
  accessToken: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
};

const initialState: AuthState = {
  accessToken: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    cleanAuthData(state) {
      state.accessToken = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.accessToken = null;
        state.isLoggedIn = false;
      })
      .addCase(fetchCurrentUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(fetchCurrentUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const { cleanAuthData } = authSlice.actions;
export const authReducer = authSlice.reducer;
