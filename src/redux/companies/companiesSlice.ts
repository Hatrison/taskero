import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchMyCompanies,
  fetchCompanyById,
  createCompany,
  updateCompany,
  deleteCompany,
  updateMembers,
} from "./operations";
import { CompaniesState, Company } from "./companies.types";

const initialState: CompaniesState = {
  items: [],
  current: null,
  loading: false,
  error: null,
};

const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    setCurrentCompany(state, action: PayloadAction<Company>) {
      state.current = action.payload;
    },
    clearCurrentCompany(state) {
      state.current = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyCompanies.fulfilled, (state, action) => {
        state.items = action.payload;

        if (!state.current && action.payload.length > 0) {
          state.current = action.payload[0];
        }
      })
      .addCase(fetchCompanyById.fulfilled, (state, action) => {
        state.current = action.payload;
      })
      .addCase(createCompany.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateCompany.fulfilled, (state, action) => {
        const updated = action.payload;
        if (state.current?._id === updated._id) {
          state.current = updated;
        }
        const index = state.items.findIndex((c) => c._id === updated._id);
        if (index !== -1) state.items[index] = updated;
      })
      .addCase(deleteCompany.fulfilled, (state, action) => {
        const id = action.payload;
        state.items = state.items.filter((c) => c._id !== id);
        if (state.current?._id === id) state.current = null;
      })
      .addCase(updateMembers.fulfilled, (state, action) => {
        const updated = action.payload;
        if (state.current?._id === updated._id) {
          state.current = updated;
        }
        const index = state.items.findIndex((c) => c._id === updated._id);
        if (index !== -1) state.items[index] = updated;
      })
      .addMatcher(
        isAnyOf(
          fetchMyCompanies.pending,
          fetchCompanyById.pending,
          createCompany.pending,
          updateCompany.pending,
          deleteCompany.pending,
          updateMembers.pending
        ),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchMyCompanies.rejected,
          fetchCompanyById.rejected,
          createCompany.rejected,
          updateCompany.rejected,
          deleteCompany.rejected,
          updateMembers.rejected
        ),
        (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchMyCompanies.fulfilled,
          fetchCompanyById.fulfilled,
          createCompany.fulfilled,
          updateCompany.fulfilled,
          deleteCompany.fulfilled,
          updateMembers.fulfilled
        ),
        (state) => {
          state.loading = false;
          state.error = null;
        }
      );
  },
});

export const { setCurrentCompany, clearCurrentCompany } =
  companiesSlice.actions;
export const companiesReducer = companiesSlice.reducer;
