import { ColumnWithTasks } from "@/redux/columns/columns.types";

export interface UserShort {
  _id: string;
  name: string;
  email: string;
  avatar?: string;
}

export type ProjectRole = "owner" | "editor" | "viewer";

export interface ProjectMember {
  _id: string;
  user: UserShort;
  role: ProjectRole;
}

export interface ProjectCompany {
  _id: string;
  name: string;
  logo?: string;
}

export interface Project {
  _id: string;
  name: string;
  description?: string;
  company: ProjectCompany;
  members: ProjectMember[];
  deadline?: string;
  createdAt: string;
}

export interface ProjectsState {
  items: Project[];
  current: Project | null;
  loading: boolean;
  error: string | null;
}

export interface CreateProjectPayload {
  name: string;
  description?: string;
  company: string;
  members: { email: string; role: ProjectRole }[];
  deadline?: string;
}

export interface UpdateProjectPayload {
  id: string;
  payload: Partial<Pick<Project, "name" | "description" | "deadline">>;
}

export interface UpdateProjectMembersPayload {
  id: string;
  members: { email: string; role: ProjectRole }[];
}

export interface ProjectResponse {
  project: Project;
  columns: ColumnWithTasks[];
}
