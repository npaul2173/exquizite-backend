import mongoose, { Schema } from "mongoose";
import { ILogin } from "./type";

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
    accessToken: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

const MODEL_NAME = "Sessions";

export const LoginModel = mongoose.model<ILogin>(MODEL_NAME, schema);
