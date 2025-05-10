import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "@/utils/axiosInstance";
import {
  Project,
  CreateProjectPayload,
  UpdateProjectPayload,
  UpdateProjectMembersPayload,
  ProjectResponse,
} from "./projects.types";

import { setColumns } from "@/redux/columns/columnsSlice";
import { setTasks } from "@/redux/tasks/tasksSlice";

export const fetchMyProjects = createAsyncThunk<Project[], void>(
  "projects/fetchMy",
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get("/api/projects/my");
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch projects"
      );
    }
  }
);

export const fetchProjectById = createAsyncThunk<Project, string>(
  "projects/fetchById",
  async (id, thunkAPI) => {
    try {
      const { data } = await instance.get<ProjectResponse>(
        `/api/projects/${id}`
      );
      const { project, columns } = data;

      const tasks = columns.flatMap((col) => col.tasks);
      const strippedColumns = columns.map(({ tasks, ...rest }) => rest);

      thunkAPI.dispatch(setColumns(strippedColumns));
      thunkAPI.dispatch(setTasks(tasks));

      return project;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch project"
      );
    }
  }
);

export const createProject = createAsyncThunk<Project, CreateProjectPayload>(
  "projects/create",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.post("/api/projects", payload);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to create project"
      );
    }
  }
);

export const updateProject = createAsyncThunk<Project, UpdateProjectPayload>(
  "projects/update",
  async ({ id, payload }, thunkAPI) => {
    try {
      const { data } = await instance.patch(`/api/projects/${id}`, payload);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to update project"
      );
    }
  }
);

export const deleteProject = createAsyncThunk<string, string>(
  "projects/delete",
  async (id, thunkAPI) => {
    try {
      await instance.delete(`/api/projects/${id}`);
      return id;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to delete project"
      );
    }
  }
);

export const updateProjectMembers = createAsyncThunk<
  Project,
  UpdateProjectMembersPayload
>("projects/updateMembers", async ({ id, members }, thunkAPI) => {
  try {
    const { data } = await instance.patch(`/api/projects/${id}/members`, {
      members,
    });
    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Failed to update members"
    );
  }
});
