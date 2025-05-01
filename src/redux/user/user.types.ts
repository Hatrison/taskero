export type TUserState = {
  name: string;
  email: string;
  avatar: string;
  theme: "light" | "dark";
  language: string;
};

export type TUserUpdatePayload = Partial<
  Pick<TUserState, "name" | "avatar" | "theme" | "language">
>;
