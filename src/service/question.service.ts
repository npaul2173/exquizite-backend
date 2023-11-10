import { QuestionModel } from "@/models/question";
import {
  CreateMultipleQuestionsProps,
  CreateQuestionProps,
} from "@/models/question/interface";
import { IQuiz } from "@/models/quiz/interface";

class QuestionService {
  async saveOne(inputData: CreateQuestionProps) {
    try {
      return await QuestionModel.create(inputData);
    } catch (error) {
      throw new Error("❌ Error: Question Save service failed");
    }
  }

  async saveMultiple(inputData: CreateMultipleQuestionsProps) {
    try {
      return await QuestionModel.insertMany(inputData.questions);
    } catch (error) {
      throw new Error("❌ Error: Question Multi Save service failed");
    }
  }
  async findAll(input: { quizId: string }) {
    try {
      return await QuestionModel.find({ quizId: input.quizId });
    } catch (error) {
      throw new Error("❌ Error: Question Find service failed");
    }
  }
}

export default QuestionService;
