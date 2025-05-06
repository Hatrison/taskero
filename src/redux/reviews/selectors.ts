import { RootState } from "../store";

export const selectReviews = (state: RootState) => state.reviews.items;
export const selectReviewsLoading = (state: RootState) =>
  state.reviews.isLoading;
export const selectReviewsError = (state: RootState) => state.reviews.error;
