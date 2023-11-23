import { ObjectId } from "mongoose";

export type ISession = {
  _id: ObjectId;
  accessToken: string;
  userId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
};

export type LoginUserProps = {
  userNameOrEmail: string;
  password: string;
};

export type CreateLoginProps = Omit<
  ISession,
  "createdAt" | "updatedAt" | "_id"
>;

export type UserFromTokenBody = {
  accessToken: string;
};
