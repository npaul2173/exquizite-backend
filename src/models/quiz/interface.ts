import mongoose from "mongoose";

export type IQuiz = {
  title: string;
  topic: string;
  tags: string[];
  coverImage: string;
  description: string;
  isPublished?: boolean;
  duration: number;
  createdAt: Date;
  updatedAt: Date;
  createdBy?: mongoose.Types.ObjectId;
};

type CreateQuizProps = Omit<IQuiz, "createdAt" | "updatedAt" | "isPublished">;

type GetQuizProps = { quizId: string };

type UpdateQuizProps = {
  quizId: string;
  patch: CreateQuizProps & { isPublished?: boolean };
};

type DeleteQuizProps = {
  quizId: string;
};

export { CreateQuizProps, GetQuizProps, UpdateQuizProps, DeleteQuizProps };
