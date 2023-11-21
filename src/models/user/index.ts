import mongoose, { SchemaTypes } from "mongoose";
import { IUser } from "./type";
import bcrypt from "bcrypt";

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
    userRoleId: { type: SchemaTypes.ObjectId, required: true },
    isEmailVerified: { type: Boolean, required: true },
    avatar: String,
    dateOfBirth: String,
  },
  { timestamps: true }
);

const MODEL_NAME = "user";

export const UserModel = mongoose.model<IUser>(MODEL_NAME, schema);
