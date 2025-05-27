import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "@/utils/axiosInstance";
import {
  Column,
  CreateColumnPayload,
  ReorderColumnsPayload,
  UpdateColumnPayload,
} from "./columns.types";

export const fetchColumnsByProject = createAsyncThunk<Column[], string>(
  "columns/fetchByProject",
  async (projectId, thunkAPI) => {
    try {
      const { data } = await instance.get(`/api/columns/${projectId}`);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch columns"
      );
    }
  }
);

export const createColumn = createAsyncThunk<Column, CreateColumnPayload>(
  "columns/create",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.post("/api/columns", payload);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to create column"
      );
    }
  }
);

export const updateColumn = createAsyncThunk<Column, UpdateColumnPayload>(
  "columns/update",
  async ({ id, data }, thunkAPI) => {
    try {
      const res = await instance.patch(`/api/columns/${id}`, data);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to update column"
      );
    }
  }
);

export const reorderColumns = createAsyncThunk<Column[], ReorderColumnsPayload>(
  "columns/reorder",
  async ({ columns }, thunkAPI) => {
    try {
      const { data } = await instance.patch("/api/columns/reorder", {
        columns,
      });
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to reorder columns"
      );
    }
  }
);

export const deleteColumn = createAsyncThunk<string, string>(
  "columns/delete",
  async (id, thunkAPI) => {
    try {
      await instance.delete(`/api/columns/${id}`);
      return id;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to delete column"
      );
    }
  }
);
