export type TUserState = {
  _id: string;
  name: string;
  email: string;
  avatar: string;
  theme: "light" | "dark";
  language: string;
};

export interface UserBase {
  _id: string;
  name: string;
  email: string;
  avatar?: string;
}

export type TUserUpdatePayload =
  | FormData
  | {
      theme: "light" | "dark";
    }
  | {
      language: string;
    };

export interface ChangePasswordPayload {
  currentPassword: string;
  newPassword: string;
}
