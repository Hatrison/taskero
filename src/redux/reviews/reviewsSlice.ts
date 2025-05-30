// src/redux/reviews/reviews.slice.ts
import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  fetchReviews,
  createReview,
  fetchMyReview,
  updateReview,
  deleteReview,
} from "./operations";
import { ReviewsState } from "./reviews.types";

const initialState: ReviewsState = {
  items: [],
  isLoading: false,
  error: null,
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    clearReviews(state) {
      state.items = [];
      state.error = null;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(createReview.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
      })
      .addCase(fetchMyReview.fulfilled, (state, action) => {
        const idx = state.items.findIndex((r) => r._id === action.payload._id);
        if (idx !== -1) state.items[idx] = action.payload;
        else state.items.push(action.payload);
      })
      .addCase(updateReview.fulfilled, (state, action) => {
        const updated = action.payload;
        const idx = state.items.findIndex((r) => r._id === updated._id);
        if (idx !== -1) state.items[idx] = updated;
      })
      .addCase(deleteReview.fulfilled, (state, action) => {
        state.items = state.items.filter((r) => r._id !== action.payload);
      })
      .addMatcher(
        isAnyOf(
          fetchReviews.pending,
          createReview.pending,
          fetchMyReview.pending,
          updateReview.pending,
          deleteReview.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )

      .addMatcher(
        isAnyOf(
          fetchReviews.rejected,
          createReview.rejected,
          fetchMyReview.rejected,
          updateReview.rejected,
          deleteReview.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload as string;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchReviews.fulfilled,
          createReview.fulfilled,
          fetchMyReview.fulfilled,
          updateReview.fulfilled,
          deleteReview.fulfilled
        ),
        (state) => {
          state.isLoading = false;
          state.error = null;
        }
      );
  },
});

export const { clearReviews } = reviewsSlice.actions;
export const reviewsReducer = reviewsSlice.reducer;
