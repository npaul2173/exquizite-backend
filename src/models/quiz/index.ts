import mongoose from "mongoose";
import { IQuiz } from "./interface";

const quizSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    topic: { type: String, required: true },
    // tags: { type: [String], required: true },
    coverImage: { type: String },
    description: { type: String },
    duration: { type: Number },
  },
  { timestamps: true }
);

export const QuizModel = mongoose.model<IQuiz>("Quiz", quizSchema);
