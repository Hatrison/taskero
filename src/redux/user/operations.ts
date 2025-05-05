import i18n from "i18next";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance, setAuthHeader } from "@/utils/axiosInstance";
import { addUserData } from "./userSlice";
import { TUserUpdatePayload } from "./user.types";

export const fetchCurrentUser = createAsyncThunk(
  "user/fetchCurrentUser",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("accessToken");
      if (token) setAuthHeader(token);

      const res = await instance.get("/api/auth/me");
      const user = res.data;

      i18n.changeLanguage(user?.language);
      thunkAPI.dispatch(addUserData(user));

      return user;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (data: TUserUpdatePayload, thunkAPI) => {
    try {
      const res = await instance.patch("/api/auth/update", data);
      const updated = res.data;

      return updated;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
