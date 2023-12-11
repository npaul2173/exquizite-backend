import mongoose, { SchemaTypes } from "mongoose";
import { IQuiz } from "./interface";

const schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    topic: { type: String, required: true },
    tags: { type: [String] },
    coverImage: { type: String },
    description: { type: String },
    duration: { type: Number },
    isPublished: { type: SchemaTypes.Boolean, default: false },
    createdBy: { type: SchemaTypes.ObjectId, required: true },
  },
  { timestamps: true }
);

export const QuizModel = mongoose.model<IQuiz>("Quiz", schema);
