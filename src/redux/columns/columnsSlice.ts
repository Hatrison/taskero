import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchColumnsByProject,
  createColumn,
  updateColumn,
  deleteColumn,
  reorderColumns,
} from "./operations";
import { Column, ColumnsState } from "./columns.types";

interface ReorderSnapshot {
  id: string;
  order: number;
}

type ColumnsSliceState = ColumnsState & {
  _snapshot?: ReorderSnapshot[];
};

const initialState: ColumnsSliceState = {
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
      .addCase(deleteColumn.fulfilled, (state, action) => {
        state.items = state.items.filter((c) => c._id !== action.payload);
      })
      .addCase(reorderColumns.pending, (state, action) => {
        state._snapshot = state.items.map((c) => ({
          id: c._id,
          order: c.order,
        }));
        action.meta.arg.columns.forEach(({ id, order }) => {
          const col = state.items.find((c) => c._id === id);
          if (col) col.order = order;
        });
      })
      .addCase(reorderColumns.fulfilled, (state, action) => {
        state.items = action.payload;
        delete state._snapshot;
      })
      .addCase(reorderColumns.rejected, (state) => {
        state._snapshot?.forEach(({ id, order }) => {
          const col = state.items.find((c) => c._id === id);
          if (col) col.order = order;
        });
        delete state._snapshot;
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
