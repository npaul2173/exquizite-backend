export type IQuestion = {
  quizId: string;
  type: string;
  text: string;
  answers: string[];
  correctAnswer: number;
  explanation?: string | undefined;
  points: number;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateQuestionProps = Omit<IQuestion, "createdAt" | "updatedAt">;
export type CreateMultipleQuestionsProps = { questions: CreateQuestionProps[] };
export type createMultipleQuestionsProps = {
  quizId: string;
  questions: CreateQuestionProps[];
};
