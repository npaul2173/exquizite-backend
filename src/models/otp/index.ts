import mongoose, { SchemaTypes } from "mongoose";
import { IOtp } from "./types";

// Enum for OTP types
export enum OTPType {
  EMAIL = "email",
  MOBILE = "mobile",
}

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
    type: {
      type: String,
      enum: [OTPType.EMAIL, OTPType.MOBILE],
      required: true,
    },
  },
  { timestamps: true }
);

const MODEL_NAME = "otp";
export const OtpModel = mongoose.model<IOtp>(MODEL_NAME, schema);
