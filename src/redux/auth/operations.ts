import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance, setAuthHeader } from "@/utils/axiosInstance";
import { clearCurrentCompany } from "@/redux/companies/companiesSlice";
import { TLoginAction, TRegisterAction, TAuthResponse } from "./auth.types";
import { addUserData } from "../user/userSlice";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (credentials: TRegisterAction, thunkAPI) => {
    try {
      const res = await instance.post<TAuthResponse>(
        "/api/auth/register",
        credentials
      );
      const { accessToken } = res.data;
      setAuthHeader(accessToken);
      localStorage.setItem("accessToken", accessToken);

      await thunkAPI.dispatch(addUserData(res.data.user));

      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials: TLoginAction, thunkAPI) => {
    try {
      const { remember, ...rest } = credentials;

      const res = await instance.post<TAuthResponse>("/api/auth/login", rest);
      const { accessToken } = res.data;
      setAuthHeader(accessToken);

      if (remember) {
        localStorage.setItem("accessToken", accessToken);
      } else {
        sessionStorage.setItem("accessToken", accessToken);
      }

      await thunkAPI.dispatch(addUserData(res.data.user));

      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
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
      thunkAPI.dispatch(clearCurrentCompany());
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    }
  }
);

export const googleLogin = createAsyncThunk<
  TAuthResponse,
  { idToken: string },
  { rejectValue: string }
>("auth/googleLogin", async ({ idToken }, thunkAPI) => {
  try {
    const res = await instance.post("/api/auth/google", {
      idToken,
    });
    const { accessToken, user } = res.data;

    setAuthHeader(accessToken);
    localStorage.setItem("accessToken", accessToken);

    await thunkAPI.dispatch(addUserData(user));
    return res.data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
  }
});
