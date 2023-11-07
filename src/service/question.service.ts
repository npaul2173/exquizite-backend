import { QuestionModel } from "@/models/question";
import { CreateQuestionProps } from "@/models/question/interface";
import { IQuiz } from "@/models/quiz/interface";

class QuestionService {
  async saveOne(inputData: CreateQuestionProps, quiz: IQuiz) {
    try {
      return await QuestionModel.create(inputData);
    } catch (error) {
      throw new Error("❌ Error: Quiz Save service failed");
    }
  }

  async findAll(input: { quizId: string }) {
    try {
      return await QuestionModel.find({ quizId: input.quizId });
    } catch (error) {
      throw new Error("❌ Error: Find service failed");
    }
  }
}

export default QuestionService;
