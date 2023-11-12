import {
  CreateMultipleQuestionsProps,
  CreateQuestionProps,
} from "@/models/question/type";
import { QuizModel } from "@/models/quiz";
import QuestionService from "@/service/question.service";
import {
  getConflictResponse,
  getCreateResponse,
} from "@/utils/helpers/response";
import { IReq, IRes } from "@/utils/interfaces/express.interface";

class QuestionController {
  private questionService: QuestionService;
  constructor() {
    this.questionService = new QuestionService();
  }

  createQuestion = async (req: IReq, res: IRes) => {
    try {
      const inputData = { ...req.body } as CreateQuestionProps;
      const quiz = await QuizModel.findById(inputData.quizId);
      if (quiz) {
        const response = await this.questionService.saveOne(inputData);
        return getConflictResponse(res, "Quiz Created", response);
      } else getConflictResponse(res, "Not a valid quizId");
    } catch (error) {
      throw new Error("❌ Error: Could not add Question");
    }
  };

  createMultipleQuestions = async (req: IReq, res: IRes) => {
    try {
      const inputData = { ...req.body } as CreateMultipleQuestionsProps;
      const responseData = await this.questionService.saveMultiple(inputData);
      return getCreateResponse(
        res,
        "Question successfully created",
        responseData
      );
    } catch (error) {
      throw new Error("❌ Error: Could not create questions");
    }
  };
}

export default QuestionController;
