import { Task } from "@/redux/tasks/tasks.types";

export interface Column {
  _id: string;
  name: string;
  order: number;
  project: string;
}

export interface ColumnsState {
  items: Column[];
  loading: boolean;
  error: string | null;
}

export interface CreateColumnPayload {
  name: string;
  order: number;
  project: string;
}

export interface UpdateColumnPayload {
  id: string;
  data: Partial<Pick<Column, "name" | "order">>;
}

export interface ReorderColumnItem {
  id: string;
  order: number;
}

export interface ReorderColumnsPayload {
  columns: ReorderColumnItem[];
}

export interface ColumnWithTasks extends Column {
  tasks: Task[];
}
