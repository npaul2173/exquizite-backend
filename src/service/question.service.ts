import { QuestionModel } from "@/models/question";
import {
  CreateMultipleQuestionsProps,
  CreateQuestionProps,
  EditQuestionProps,
} from "@/models/question/type";
import { QuizModel } from "@/models/quiz";
import { IQuiz } from "@/models/quiz/interface";
import Logging from "@/utils/library/logging";

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
      throw new Error("❌ Error: Question update service failed" + error);
    }
  }

  async delQuesForQuiz(quizId: string) {
    try {
      return await QuestionModel.deleteMany({ quizId });
    } catch (error) {
      throw new Error("❌ Error: Question delete service failed");
    }
  }

  async deleteSingleQuestion(questionId: string) {
    try {
      return await QuestionModel.findByIdAndDelete(questionId);
    } catch (error) {
      throw new Error("❌ Error: Question delete service failed");
    }
  }

  async isPublishedQuizQues(questionId: string) {
    try {
      const question = await QuestionModel.findById(questionId);
      return await QuizModel.findById(question?.quizId);
    } catch (error) {
      throw new Error(
        "❌ Error: Is question from published quiz service failed"
      );
    }
  }
}

export default QuestionService;
