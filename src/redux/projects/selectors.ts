import { RootState } from "@/redux/store";

export const selectProjects = (state: RootState) => state.projects.items;
export const selectCurrentProject = (state: RootState) =>
  state.projects.current;
export const selectProjectsLoading = (state: RootState) =>
  state.projects.loading;
export const selectProjectsError = (state: RootState) => state.projects.error;
