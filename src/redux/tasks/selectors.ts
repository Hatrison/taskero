import { RootState } from "@/redux/store";

export const selectTasks = (state: RootState) => state.tasks.items;
export const selectTasksLoading = (state: RootState) => state.tasks.loading;
export const selectTasksError = (state: RootState) => state.tasks.error;

export const selectTasksByColumn = (columnId: string) => (state: RootState) =>
  state.tasks.items.filter((task) => task.column === columnId);
