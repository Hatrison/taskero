import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "@/utils/axiosInstance";
import {
  Comment,
  CreateCommentPayload,
  UpdateCommentPayload,
} from "./comments.types";

export const fetchCommentsByTask = createAsyncThunk<Comment[], string>(
  "comments/fetchByTask",
  async (taskId, thunkAPI) => {
    try {
      const { data } = await instance.get(`/api/comments/${taskId}`);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch comments"
      );
    }
  }
);

export const createComment = createAsyncThunk<Comment, CreateCommentPayload>(
  "comments/create",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.post("/api/comments", payload);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to create comment"
      );
    }
  }
);

export const updateComment = createAsyncThunk<Comment, UpdateCommentPayload>(
  "comments/update",
  async ({ id, text }, thunkAPI) => {
    try {
      const { data } = await instance.patch(`/api/comments/${id}`, { text });
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to update comment"
      );
    }
  }
);

export const deleteComment = createAsyncThunk<string, string>(
  "comments/delete",
  async (id, thunkAPI) => {
    try {
      await instance.delete(`/api/comments/${id}`);
      return id;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to delete comment"
      );
    }
  }
);
