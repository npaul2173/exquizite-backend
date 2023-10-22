import mongoose, { Schema } from "mongoose";
import { IQuestion } from "./interface";

const schema = new mongoose.Schema(
  {
    quizId: { type: Schema.Types.ObjectId, required: true },
    type: { type: String, required: true },
    text: { type: String, required: true },
    answers: { type: [String], required: true },
    correctAnswer: { type: Number, required: true },
    difficulty: { type: String, required: true },
    tags: { type: [String], required: true },
    explanation: { type: String },
  },
  { timestamps: true }
);

const MODEL_NAME = "Question";
export const quizModel = mongoose.model<IQuestion>(MODEL_NAME, schema);
