import {
  CreateMultipleQuestionsProps,
  CreateQuestionProps,
  EditQuestionProps,
} from "@/models/question/type";
import { QuizModel } from "@/models/quiz";
import QuestionService from "@/service/question.service";
import QuizService from "@/service/quiz.service";
import {
  getConflictResponse,
  getCreateResponse,
  getInternalServerErrorResponse,
  getNotFoundResponse,
  getOKResponse,
} from "@/utils/helpers/response";
import { IReq, IRes } from "@/utils/interfaces/express.interface";
import Logging from "@/utils/library/logging";

class QuestionController {
  private questionService: QuestionService;
  private quizService: QuizService;
  constructor() {
    this.questionService = new QuestionService();
    this.quizService = new QuizService();
  }

  createQuestion = async (req: IReq, res: IRes) => {
    try {
      const inputData = { ...req.body } as CreateQuestionProps;
      const quiz = await QuizModel.findById(inputData.quizId);
      if (quiz) {
        const response = await this.questionService.saveOne(inputData);
        return getCreateResponse(res, "Quiz Created", response);
      } else getConflictResponse(res, "Not a valid quizId");
    } catch (error) {
      return getInternalServerErrorResponse(res, error);
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

  editQuestion = async (req: IReq, res: IRes) => {
    try {
      const inputData = { ...req.body } as EditQuestionProps;
      const quizFound = await this.quizService.findOne(inputData?.quizId);
      Logging.info(quizFound);
      if (quizFound) {
        if (quizFound.isPublished) {
          return getConflictResponse(
            res,
            "Published quiz questions cannot be modified"
          );
        } else {
          const quizQuestion = await this.questionService.updateQuestion(
            inputData
          );
          const message = "Quiz question updated successfully";
          return getOKResponse(res, quizQuestion, message);
        }
      } else {
        const message = "Quiz not found";
        return getNotFoundResponse(res, message);
      }
    } catch (error) {
      return getInternalServerErrorResponse(res, error);
    }
  };
}

export default QuestionController;
