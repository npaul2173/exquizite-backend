import mongoose, { ObjectId, Schema } from "mongoose";

export type IUser = {
  _id: mongoose.Types.ObjectId;
  userName: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  avatar?: string | null;
  dateOfBirth: string;
  isEmailVerified?: boolean;
  createdAt: Date;
  updatedAt: Date;
  userRoleId: string;
};

export type UserProps = Omit<IUser, "updatedAt" | "createdAt">;

export type CreateUserProps = Omit<
  IUser,
  "createdAt" | "updatedAt" | "_id" | "isEmailVerified"
>;
