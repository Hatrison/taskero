import { RootState } from "@/redux/store";

export const selectComments = (state: RootState) => state.comments.items;
export const selectCommentsLoading = (state: RootState) =>
  state.comments.loading;
export const selectCommentsError = (state: RootState) => state.comments.error;

export const selectCommentsByTask = (taskId: string) => (state: RootState) =>
  state.comments.items.filter((comment) => comment.task === taskId);
