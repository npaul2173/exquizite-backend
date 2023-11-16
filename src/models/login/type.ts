import { ObjectId } from "mongoose";

export type ILogin = {
  userName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  accessToken: string;
  _id: ObjectId;
};

export type LoginUserProps = {
  userNameOrEmail: string;
  password: string;
};

export type CreateLoginProps = Omit<ILogin, "createdAt" | "updatedAt">;
