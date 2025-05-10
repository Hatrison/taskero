export interface UserShort {
  _id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Company {
  _id: string;
  name: string;
  logo?: string;
  owner: UserShort;
  members: UserShort[];
}

export interface CompaniesState {
  items: Company[];
  current: Company | null;
  loading: boolean;
  error: string | null;
}

export interface CreateCompanyPayload {
  name: string;
}

export interface UpdateCompanyPayload {
  id: string;
  formData: FormData;
}

export interface UpdateCompanyMembersPayload {
  id: string;
  members: string[];
}
