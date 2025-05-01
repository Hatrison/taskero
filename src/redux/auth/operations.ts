import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance, setAuthHeader } from "@/utils/axiosInstance";
import { TLoginAction, TRegisterAction, TAuthResponse } from "./auth.types";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (credentials: TRegisterAction, thunkAPI) => {
    try {
      const res = await instance.post<TAuthResponse>(
        "/api/auth/register",
        credentials
      );
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials: TLoginAction, thunkAPI) => {
    try {
      const res = await instance.post<TAuthResponse>(
        "/api/auth/login",
        credentials
      );
      const { accessToken } = res.data;
      setAuthHeader(accessToken);
      localStorage.setItem("accessToken", accessToken);
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await instance.post("/api/auth/logout");
      setAuthHeader("");
      localStorage.removeItem("accessToken");
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
