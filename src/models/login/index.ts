import mongoose from "mongoose";
import { ILogin } from "./type";

const schema = new mongoose.Schema({
  userNameOrEmail: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const MODEL_NAME = "login";

export const LoginModel = mongoose.model<ILogin>(MODEL_NAME, schema);
