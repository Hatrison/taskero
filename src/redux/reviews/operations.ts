import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  CreateReviewPayload,
  Review,
  UpdateReviewPayload,
} from "./reviews.types";
import { instance } from "@/utils/axiosInstance";

export const fetchReviews = createAsyncThunk<Review[], void>(
  "reviews/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await instance.get<Review[]>("/api/reviews");
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    }
  }
);

export const createReview = createAsyncThunk<Review, CreateReviewPayload>(
  "reviews/create",
  async ({ rating, text }, thunkAPI) => {
    try {
      const res = await instance.post<Review>("/api/reviews", { rating, text });
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    }
  }
);

export const fetchMyReview = createAsyncThunk<Review, void>(
  "reviews/fetchMy",
  async (_, thunkAPI) => {
    try {
      const res = await instance.get<Review>("/api/reviews/my");
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    }
  }
);

export const updateReview = createAsyncThunk<Review, UpdateReviewPayload>(
  "reviews/update",
  async ({ id, rating, text }, thunkAPI) => {
    try {
      const res = await instance.patch<Review>(`/api/reviews/${id}`, {
        rating,
        text,
      });
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    }
  }
);

export const deleteReview = createAsyncThunk<string, string>(
  "reviews/delete",
  async (id, thunkAPI) => {
    try {
      await instance.delete(`/api/reviews/${id}`);
      return id;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    }
  }
);
