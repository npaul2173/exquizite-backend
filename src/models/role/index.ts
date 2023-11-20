import mongoose, { SchemaTypes } from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: SchemaTypes.String,
      required: true,
    },
    permissions: [SchemaTypes.ObjectId],
  },
  { timestamps: true }
);

const MODEL_NAME = "role";
export const RoleModel = mongoose.model(MODEL_NAME, schema);
