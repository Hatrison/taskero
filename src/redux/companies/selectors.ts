import { RootState } from "@/redux/store";

export const selectCompanies = (state: RootState) => state.companies.items;
export const selectCurrentCompany = (state: RootState) =>
  state.companies.current;
export const selectCompaniesLoading = (state: RootState) =>
  state.companies.loading;
export const selectCompaniesError = (state: RootState) => state.companies.error;
