import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "@/utils/axiosInstance";
import { Task, CreateTaskPayload, UpdateTaskPayload } from "./tasks.types";

export const fetchProjectTasks = createAsyncThunk<Task[], string>(
  "tasks/fetchProjectTasks",
  async (projectId, thunkAPI) => {
    try {
      const { data } = await instance.get(`/api/tasks/project/${projectId}`);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch tasks"
      );
    }
  }
);

export const fetchTaskById = createAsyncThunk<Task, string>(
  "tasks/fetchById",
  async (id, thunkAPI) => {
    try {
      const { data } = await instance.get(`/api/tasks/${id}`);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch task"
      );
    }
  }
);

export const createTask = createAsyncThunk<Task, CreateTaskPayload>(
  "tasks/create",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.post("/api/tasks", payload);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to create task"
      );
    }
  }
);

export const updateTask = createAsyncThunk<Task, UpdateTaskPayload>(
  "tasks/update",
  async ({ id, formData }, thunkAPI) => {
    try {
      const { data } = await instance.patch(`/api/tasks/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to update task"
      );
    }
  }
);

export const deleteTask = createAsyncThunk<string, string>(
  "tasks/delete",
  async (id, thunkAPI) => {
    try {
      await instance.delete(`/api/tasks/${id}`);
      return id;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to delete task"
      );
    }
  }
);
