import { createAsyncThunk } from "@reduxjs/toolkit";
import { Review } from "./reviews.types";
import { instance } from "@/utils/axiosInstance";

export const fetchReviews = createAsyncThunk<Review[], void>(
  "reviews/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await instance.get("/api/reviews");

      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    }
  }
);
