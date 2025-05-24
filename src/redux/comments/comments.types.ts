import { UserBase } from "../user/user.types";

export interface Comment {
  _id: string;
  task: string;
  user: UserBase;
  text: string;
  createdAt: string;
  updatedAt: string;
}

export interface CommentsState {
  items: Comment[];
  loading: boolean;
  error: string | null;
}

export interface CreateCommentPayload {
  task: string;
  text: string;
}

export interface UpdateCommentPayload {
  id: string;
  text: string;
}
