import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TThemeState, TTheme } from "./theme.types";

const initialState: TThemeState = {
  current: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<TTheme>) => {
      state.current = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
