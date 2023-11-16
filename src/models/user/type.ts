import { ObjectId } from "mongoose";

export type IUser = {
  _id: ObjectId;
  userName: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  avatar?: string | null;
  dateOfBirth: string;
  // userRoles: string[];
  isEmailVerified?: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type UserProps = Omit<IUser, "updatedAt" | "createdAt">;

export type CreateUserProps = Omit<
  IUser,
  "createdAt" | "updatedAt" | "_id" | "isEmailVerified"
>;
