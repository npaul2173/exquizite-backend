import mongoose, { ObjectId } from "mongoose";

export type ISession = {
  _id: mongoose.Types.ObjectId;
  accessToken: string;
  userId: mongoose.Types.ObjectId;
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
