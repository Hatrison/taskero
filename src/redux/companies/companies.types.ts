import { UserBase } from "../user/user.types";

export interface Company {
  _id: string;
  name: string;
  logo?: string;
  owner: UserBase;
  members: UserBase[];
  createdAt: string;
}

export interface CompaniesState {
  items: Company[];
  current: Company | null;
  loading: boolean;
  error: string | null;
}

export type CreateCompanyPayload = FormData;

export interface UpdateCompanyPayload {
  id: string;
  formData: FormData;
}

export interface UpdateCompanyMembersPayload {
  id: string;
  members: string[];
}
