export type TUserState = {
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

export type TUserUpdatePayload = Partial<
  Pick<TUserState, "name" | "avatar" | "theme" | "language">
>;
