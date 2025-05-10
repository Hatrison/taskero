import { RootState } from "@/redux/store";

export const selectColumns = (state: RootState) => state.columns.items;
export const selectColumnsLoading = (state: RootState) => state.columns.loading;
export const selectColumnsError = (state: RootState) => state.columns.error;
