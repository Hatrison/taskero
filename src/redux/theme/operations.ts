import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateUser } from "@/redux/user/operations";
import { setTheme } from "./themeSlice";
import { TTheme } from "./theme.types";

export const toggleTheme = createAsyncThunk(
  "theme/toggleTheme",
  async (_, thunkAPI) => {
    const state: any = thunkAPI.getState();
    const current = state.theme.current as TTheme;
    const newTheme: TTheme = current === "light" ? "dark" : "light";

    thunkAPI.dispatch(setTheme(newTheme));

    await thunkAPI.dispatch(updateUser({ theme: newTheme }));

    return newTheme;
  }
);
