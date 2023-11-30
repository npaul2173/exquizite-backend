import mongoose, { SchemaTypes } from "mongoose";
import { IOtp } from "./types";

const schema = new mongoose.Schema(
  {
    userId: {
      type: SchemaTypes.ObjectId,
      required: true,
      ref: "users",
    },
    code: {
      required: true,
      type: SchemaTypes.String,
    },
  },
  { timestamps: true }
);

const MODEL_NAME = "otp";
export const OtpModel = mongoose.model<IOtp>(MODEL_NAME, schema);
