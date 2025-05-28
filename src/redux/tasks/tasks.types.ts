import { UserBase } from "../user/user.types";

export type TaskPriority = "low" | "medium" | "high" | "critical";

export interface Task {
  _id: string;
  title: string;
  description?: string;
  status?: string;
  project: string;
  column: string;
  assignedTo: UserBase[];
  priority: TaskPriority;
  attachments: string[];
  deadline?: string;
}

export interface TasksState {
  items: Task[];
  loading: boolean;
  error: string | null;
}

export interface CreateTaskPayload {
  title: string;
  description?: string;
  status?: string;
  project: string;
  column: string;
  assignedTo?: string[];
  priority?: TaskPriority;
  attachments?: File[];
  deadline?: string;
}

export interface UpdateTaskPayload {
  id: string;
  formData: FormData;
}
