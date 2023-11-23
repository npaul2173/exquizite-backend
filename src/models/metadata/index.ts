import mongoose, { SchemaTypes } from "mongoose";

const schema = new mongoose.Schema(
  {
    initialized: SchemaTypes.Boolean,
  },
  { collection: "metaData" }
);

const MODEL_NAME = "metaData";
export const MetaDataModel = mongoose.model(MODEL_NAME, schema);
