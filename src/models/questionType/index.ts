import mongoose from "mongoose";
import { IQuestionType } from "./interface";

const schema = new mongoose.Schema(
  {
    id: mongoose.Types.ObjectId,
    type_name: String,
    type_description: String,
  },
  { timestamps: true }
);

const MODEL_NAME = "questionType";

export const QuestionTypeModel = mongoose.model<IQuestionType>(
  MODEL_NAME,
  schema
);
