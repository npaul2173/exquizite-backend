import mongoose, { Schema } from "mongoose";
import { ISession } from "./type";

const schema = new mongoose.Schema(
  {
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

export const LoginModel = mongoose.model<ISession>(MODEL_NAME, schema);
