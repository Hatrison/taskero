import { createAsyncThunk } from "@reduxjs/toolkit";
import { Review } from "./reviews.types";
import { instance } from "@/utils/axiosInstance";

export const fetchReviews = createAsyncThunk<
  Review[],
  void,
  { rejectValue: string }
>("reviews/fetchAll", async (_, thunkAPI) => {
  try {
    const res = await instance.get("/api/reviews");

    return res.data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.message || "Failed to load reviews");
  }
});
