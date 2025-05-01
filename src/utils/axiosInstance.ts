import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:5000",
});

export const setAuthHeader = (token: string) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
