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
};

type CreateQuizProps = Omit<IQuiz, "createdAt" | "updatedAt" | "isPublished">;

type GetQuizProps = { quizId: string };

type UpdateQuizProps = {
  quizId: string;
  patch: CreateQuizProps & { isPublished?: boolean };
};

export { CreateQuizProps, GetQuizProps, UpdateQuizProps };
