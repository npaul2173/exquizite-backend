export type ILogin = {
  userNameOrEmail: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};

export type LoginProps = Omit<ILogin, "createdAt" | "updatedAt">;

export type LoginUserProps = Omit<ILogin, "createdAt" | "updatedAt">;
