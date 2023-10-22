export interface IQuestion {
  quizId: string;
  type: string;
  text: string;
  answers: string[];
  correctAnswer: number;
  difficulty: string;
  tags: string[];
  explanation: string;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateQuestionProps = Omit<IQuestion, "createdAt" | "updatedAt">;
