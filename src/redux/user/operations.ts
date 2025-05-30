import i18n from "i18next";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance, setAuthHeader } from "@/utils/axiosInstance";
import { addUserData } from "./userSlice";
import {
  ChangePasswordPayload,
  TUserState,
  TUserUpdatePayload,
  UserBase,
} from "./user.types";

export const fetchCurrentUser = createAsyncThunk(
  "user/fetchCurrentUser",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("accessToken");
      if (token) setAuthHeader(token);

      const res = await instance.get("/api/users/me");
      const user = res.data;

      i18n.changeLanguage(user?.language);
      thunkAPI.dispatch(addUserData(user));

      return user;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    }
  }
);

export const updateUser = createAsyncThunk<TUserState, TUserUpdatePayload>(
  "user/updateUser",
  async (data, thunkAPI) => {
    try {
      const res = await instance.patch("/api/users/update", data);
      const updated = res.data;

      return updated;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    }
  }
);

export const resolveUsersByEmail = createAsyncThunk<UserBase[], string[]>(
  "users/resolveByEmail",
  async (emails, thunkAPI) => {
    try {
      const { data } = await instance.post("/api/users/resolve", { emails });
      return data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    }
  }
);

export const changePassword = createAsyncThunk<void, ChangePasswordPayload>(
  "user/changePassword",
  async ({ currentPassword, newPassword }, thunkAPI) => {
    try {
      await instance.patch("/api/users/change-password", {
        currentPassword,
        newPassword,
      });
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    }
  }
);
