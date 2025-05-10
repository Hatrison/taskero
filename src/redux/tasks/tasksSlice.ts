import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchProjectTasks,
  fetchTaskById,
  createTask,
  updateTask,
  deleteTask,
} from "./operations";
import { TasksState, Task } from "./tasks.types";

const initialState: TasksState = {
  items: [],
  loading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks(state, action: PayloadAction<Task[]>) {
      state.items = action.payload;
    },
    clearTasks(state) {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjectTasks.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(fetchTaskById.fulfilled, (state, action) => {
        const task = action.payload;
        const index = state.items.findIndex((t) => t._id === task._id);
        if (index !== -1) state.items[index] = task;
        else state.items.push(task);
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const updated = action.payload;
        const index = state.items.findIndex((t) => t._id === updated._id);
        if (index !== -1) state.items[index] = updated;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.items = state.items.filter((t) => t._id !== action.payload);
      })
      .addMatcher(
        isAnyOf(
          fetchProjectTasks.pending,
          fetchTaskById.pending,
          createTask.pending,
          updateTask.pending,
          deleteTask.pending
        ),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchProjectTasks.rejected,
          fetchTaskById.rejected,
          createTask.rejected,
          updateTask.rejected,
          deleteTask.rejected
        ),
        (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchProjectTasks.fulfilled,
          fetchTaskById.fulfilled,
          createTask.fulfilled,
          updateTask.fulfilled,
          deleteTask.fulfilled
        ),
        (state) => {
          state.loading = false;
          state.error = null;
        }
      );
  },
});

export const { setTasks, clearTasks } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
