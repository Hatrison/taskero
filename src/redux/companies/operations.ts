import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "@/utils/axiosInstance";
import {
  Company,
  CreateCompanyPayload,
  UpdateCompanyPayload,
  UpdateCompanyMembersPayload,
} from "./companies.types";

export const fetchMyCompanies = createAsyncThunk<Company[], void>(
  "companies/fetchMy",
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get("/api/companies/my");
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch companies"
      );
    }
  }
);

export const fetchCompanyById = createAsyncThunk<Company, string>(
  "companies/fetchById",
  async (id, thunkAPI) => {
    try {
      const { data } = await instance.get(`/api/companies/${id}`);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch company"
      );
    }
  }
);

export const createCompany = createAsyncThunk<Company, CreateCompanyPayload>(
  "companies/create",
  async (body, thunkAPI) => {
    try {
      const { data } = await instance.post("/api/companies", body);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to create company"
      );
    }
  }
);

export const updateCompany = createAsyncThunk<Company, UpdateCompanyPayload>(
  "companies/update",
  async ({ id, formData }, thunkAPI) => {
    try {
      const { data } = await instance.patch(`/api/companies/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to update company"
      );
    }
  }
);

export const deleteCompany = createAsyncThunk<string, string>(
  "companies/delete",
  async (id, thunkAPI) => {
    try {
      await instance.delete(`/api/companies/${id}`);
      return id;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to delete company"
      );
    }
  }
);

export const updateMembers = createAsyncThunk<
  Company,
  UpdateCompanyMembersPayload
>("companies/updateMembers", async ({ id, members }, thunkAPI) => {
  try {
    const { data } = await instance.patch(`/api/companies/${id}/members`, {
      members,
    });
    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Failed to update members"
    );
  }
});
