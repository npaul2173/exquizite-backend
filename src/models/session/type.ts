import { ObjectId } from "mongoose";

export type ISession = {
  createdAt: Date;
  updatedAt: Date;
  accessToken: string;
  userId: ObjectId;
  _id: ObjectId;
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
