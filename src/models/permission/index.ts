import mongoose, { SchemaType, SchemaTypes } from "mongoose";
import { IPermission } from "./types";

const schema = new mongoose.Schema<IPermission>(
  {
    name: { required: true, type: SchemaTypes.String },
    description: { required: true, type: SchemaTypes.String },
  },
  { timestamps: true }
);

const MODEL_NAME = "permission";
export const PermissionModel = mongoose.model<IPermission>(MODEL_NAME, schema);
