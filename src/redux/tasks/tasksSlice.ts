import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchProjectTasks,
  fetchTaskById,
  createTask,
  updateTask,
  deleteTask,
} from "./operations";
import { TasksState, Task } from "./tasks.types";

type ExtendedTasksState = TasksState & {
  _snapshot?: Record<string, string>;
};

const initialState: ExtendedTasksState = {
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
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.items = state.items.filter((t) => t._id !== action.payload);
      })
      .addCase(updateTask.pending, (state, action) => {
        const { id, formData } = action.meta.arg;
        const task = state.items.find((t) => t._id === id);
        if (task) {
          state._snapshot = state._snapshot || {};
          state._snapshot[id] = task.column;
          const newCol = formData.get("column");
          if (typeof newCol === "string") {
            task.column = newCol;
          }
        }
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const updated = action.payload;
        const idx = state.items.findIndex((t) => t._id === updated._id);
        if (idx !== -1) state.items[idx] = updated;
        if (state._snapshot) {
          delete state._snapshot[updated._id];
        }
      })
      .addCase(updateTask.rejected, (state, action) => {
        const id = action.meta.arg.id;
        const oldCol = state._snapshot?.[id];
        if (oldCol) {
          const task = state.items.find((t) => t._id === id);
          if (task) task.column = oldCol;
        }
        if (state._snapshot) {
          delete state._snapshot[id];
        }
      })
      .addMatcher(
        isAnyOf(
          fetchProjectTasks.pending,
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
