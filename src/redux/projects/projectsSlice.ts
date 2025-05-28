import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  fetchMyProjects,
  fetchProjectById,
  createProject,
  updateProject,
  deleteProject,
  updateProjectMembers,
} from "./operations";
import { ProjectsState } from "./projects.types";

const initialState: ProjectsState = {
  items: [],
  current: null,
  loading: false,
  error: null,
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    clearCurrentProject(state) {
      state.current = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyProjects.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(fetchProjectById.fulfilled, (state, action) => {
        state.current = action.payload;
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateProject.fulfilled, (state, action) => {
        const updated = action.payload;
        if (state.current?._id === updated._id) {
          state.current = updated;
        }
        const index = state.items.findIndex((p) => p._id === updated._id);
        if (index !== -1) state.items[index] = updated;
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        state.items = state.items.filter((p) => p._id !== action.payload);
        if (state.current?._id === action.payload) {
          state.current = null;
        }
      })
      .addCase(updateProjectMembers.fulfilled, (state, action) => {
        const updated = action.payload;
        if (state.current?._id === updated._id) {
          state.current = updated;
        }
        const index = state.items.findIndex((p) => p._id === updated._id);
        if (index !== -1) state.items[index] = updated;
      })
      .addMatcher(
        isAnyOf(
          fetchMyProjects.pending,
          fetchProjectById.pending,
          createProject.pending,
          deleteProject.pending
        ),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchMyProjects.rejected,
          fetchProjectById.rejected,
          createProject.rejected,
          deleteProject.rejected
        ),
        (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchMyProjects.fulfilled,
          fetchProjectById.fulfilled,
          createProject.fulfilled,
          deleteProject.fulfilled
        ),
        (state) => {
          state.loading = false;
          state.error = null;
        }
      );
  },
});

export const { clearCurrentProject } = projectsSlice.actions;
export const projectsReducer = projectsSlice.reducer;
