import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  fetchCommentsByTask,
  createComment,
  updateComment,
  deleteComment,
} from "./operations";
import { CommentsState } from "./comments.types";

const initialState: CommentsState = {
  items: [],
  loading: false,
  error: null,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    clearComments(state) {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByTask.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateComment.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (c) => c._id === action.payload._id
        );
        if (index !== -1) state.items[index] = action.payload;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.items = state.items.filter((c) => c._id !== action.payload);
      })
      .addMatcher(
        isAnyOf(
          fetchCommentsByTask.pending,
          createComment.pending,
          updateComment.pending,
          deleteComment.pending
        ),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchCommentsByTask.rejected,
          createComment.rejected,
          updateComment.rejected,
          deleteComment.rejected
        ),
        (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchCommentsByTask.fulfilled,
          createComment.fulfilled,
          updateComment.fulfilled,
          deleteComment.fulfilled
        ),
        (state) => {
          state.loading = false;
          state.error = null;
        }
      );
  },
});

export const { clearComments } = commentsSlice.actions;
export const commentsReducer = commentsSlice.reducer;
