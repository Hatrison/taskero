export type TRegisterAction = {
  email: string;
  password: string;
  name: string;
};

export type TLoginAction = {
  email: string;
  password: string;
  remember: boolean;
};

export type TAuthResponse = {
  accessToken: string;
};
