import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCurrentUser, updateUser } from "./operations";
import { TUserState } from "./user.types";

const initialState: TUserState = {
  name: "",
  email: "",
  avatar: "",
  theme: "light",
  language: "en",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserData: (state, action: PayloadAction<TUserState>) => {
      return { ...state, ...action.payload };
    },
    cleanUserData: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        return { ...state, ...action.payload };
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        return { ...state, ...action.payload };
      });
  },
});

export const { addUserData, cleanUserData } = userSlice.actions;
export const userReducer = userSlice.reducer;
