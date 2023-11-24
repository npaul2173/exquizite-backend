import { QuizModel } from "@/models/quiz";
import { CreateQuizProps, UpdateQuizProps } from "@/models/quiz/interface";
import { JsonResponse } from "@/utils/interfaces/response.interface";
import { StatusCodes } from "http-status-codes";

class QuizService {
  async create(inputData: CreateQuizProps) {
    try {
      const data = await this.saveOne(inputData);
      return {
        statusCode: StatusCodes.CREATED,
        status: true,
        message: "Quiz Created",
        data,
      } as JsonResponse;
    } catch (error) {
      throw new Error("❌ Error: Quiz create service failed" + error);
    }
  }

  async findOne(quizId: string) {
    try {
      return await QuizModel.findById(quizId);
    } catch (error) {
      throw new Error("❌ Error: Find Quiz Service failed" + error);
    }
  }

  async saveOne(inputData: CreateQuizProps) {
    try {
      return await QuizModel.create(inputData);
    } catch (error) {
      throw new Error("❌ Error: Quiz Save service failed" + error);
    }
  }

  async publishQuiz(quizId: string) {
    try {
    } catch (error) {
      throw new Error("❌ Error: Quiz publish service failed" + error);
    }
  }

  async updateQuiz(inputData: UpdateQuizProps) {
    try {
      const { quizId } = inputData;
      return await QuizModel.findByIdAndUpdate(quizId, inputData.patch, {
        new: true,
      });
    } catch (error) {
      throw new Error("❌ Error: Quiz update service failed" + error);
    }
  }
}

export default QuizService;
