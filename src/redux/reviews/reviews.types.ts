export type ReviewUser = {
  _id: string;
  name: string;
  avatar: string;
};

export type Review = {
  _id: string;
  user: ReviewUser;
  rating: number;
  text: string;
  createdAt: string;
  updatedAt: string;
};

export type ReviewsState = {
  items: Review[];
  isLoading: boolean;
  error: string | null;
};

export type CreateReviewPayload = {
  rating: number;
  text: string;
};

export type UpdateReviewPayload = {
  id: string;
  rating?: number;
  text?: string;
};
