import { QuizModel } from "@/models/quiz";
import { JsonResponse } from "@/utils/interfaces/response.interface";
import { StatusCodes } from "http-status-codes";

class QuizService {
  async create(inputData: any) {
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

  async saveOne(inputData: any) {
    try {
      return await QuizModel.create(inputData);
    } catch (error) {
      throw new Error("❌ Error: Quiz Save service failed" + error);
    }
  }
}

export default QuizService;
