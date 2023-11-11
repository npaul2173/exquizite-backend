export type IQuestionType = {
  id: string;
  type_name: string;
  type_description: string;
  createdAt: Date;
  updatedAt: Date;
};

export type QuestionTypeProps = Omit<
  IQuestionType,
  "createdAt" | "updatedAt" | "id"
>;
