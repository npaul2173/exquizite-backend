import { CreateQuestionProps } from "@/models/question/interface";
import { QuizModel } from "@/models/quiz";
import QuestionService from "@/service/question.service";
import QuizService from "@/service/quiz.service";
import { IReq, IRes } from "@/utils/interfaces/express.interface";
import { JsonResponse } from "@/utils/interfaces/response.interface";
import { StatusCodes } from "http-status-codes";

class QuestionController {
  private questionService: QuestionService;
  constructor() {
    this.questionService = new QuestionService();
  }

  addQuestion = async (req: IReq, res: IRes) => {
    try {
      const inputData = { ...req.body } as CreateQuestionProps;
      const quiz = await QuizModel.findById(inputData.quizId);
      if (quiz) {
        const response = await this.questionService.saveOne(inputData, quiz);
        res.send({
          statusCode: StatusCodes.CREATED,
          status: true,
          message: "Quiz Created",
          data: response,
        } as JsonResponse);
      } else {
        res.send({
          statusCode: StatusCodes.CONFLICT,
          status: false,
          message: "Not a valid quizId",
        } as JsonResponse);
      }
    } catch (error) {
      throw new Error("☣️ Error: Could not add Question");
    }
  };
}

export default QuestionController;
