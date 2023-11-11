import mongoose from "mongoose";
import { IUserType } from "./type";

const schema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    avatar: String,
    dateOfBirth: String,
    userRoles: { type: [String] },
  },
  { timestamps: true }
);

const MODEL_NAME = "user";

export const UserTypeModel = mongoose.model<IUserType>(MODEL_NAME, schema);
