import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchColumnsByProject,
  createColumn,
  updateColumn,
  deleteColumn,
  reorderColumns,
} from "./operations";
import { Column, ColumnsState } from "./columns.types";

const initialState: ColumnsState = {
  items: [],
  loading: false,
  error: null,
};

const columnsSlice = createSlice({
  name: "columns",
  initialState,
  reducers: {
    setColumns(state, action: PayloadAction<Column[]>) {
      state.items = action.payload;
    },
    clearColumns(state) {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchColumnsByProject.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(createColumn.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateColumn.fulfilled, (state, action) => {
        const updated = action.payload;
        const index = state.items.findIndex((c) => c._id === updated._id);
        if (index !== -1) state.items[index] = updated;
      })
      .addCase(reorderColumns.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(deleteColumn.fulfilled, (state, action) => {
        state.items = state.items.filter((c) => c._id !== action.payload);
      })
      .addMatcher(
        isAnyOf(
          fetchColumnsByProject.pending,
          createColumn.pending,
          updateColumn.pending,
          reorderColumns.pending,
          deleteColumn.pending
        ),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchColumnsByProject.rejected,
          createColumn.rejected,
          updateColumn.rejected,
          reorderColumns.rejected,
          deleteColumn.rejected
        ),
        (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchColumnsByProject.fulfilled,
          createColumn.fulfilled,
          updateColumn.fulfilled,
          reorderColumns.fulfilled,
          deleteColumn.fulfilled
        ),
        (state) => {
          state.loading = false;
          state.error = null;
        }
      );
  },
});

export const { setColumns, clearColumns } = columnsSlice.actions;
export const columnsReducer = columnsSlice.reducer;
