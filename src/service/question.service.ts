import { QuestionModel } from "@/models/question";
import {
  CreateMultipleQuestionsProps,
  CreateQuestionProps,
  EditQuestionProps,
} from "@/models/question/type";
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

  async updateQuestion(inputData: EditQuestionProps) {
    try {
      const { questionId } = inputData;
      return await QuestionModel.findByIdAndUpdate(
        questionId,
        inputData.patch,
        { new: true }
      );
    } catch (error) {
      throw new Error("❌ Error: Quiz update service failed" + error);
    }
  }
}

export default QuestionService;
