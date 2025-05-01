import { RootState } from "../store";

export const selectUser = (state: RootState) => state.user;
export const selectUserName = (state: RootState) => state.user.name;
export const selectUserAvatar = (state: RootState) => state.user.avatar;
export const selectUserEmail = (state: RootState) => state.user.email;
