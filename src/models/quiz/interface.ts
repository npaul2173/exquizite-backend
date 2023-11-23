export type IQuiz = {
  title: string;
  topic: string;
  tags: string[];
  coverImage: string;
  description: string;
  duration: number;
  createdAt: Date;
  updatedAt: Date;
};

type CreateQuizProps = Omit<IQuiz, "createdAt" | "updatedAt">;

type GetQuizProps = { quizId: string };

type UpdateQuizProps = CreateQuizProps & { quizId: string };

export { CreateQuizProps, GetQuizProps, UpdateQuizProps };
