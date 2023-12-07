import {
  CreateQuizProps,
  DeleteQuizProps,
  UpdateQuizProps,
} from "@/models/quiz/interface";
import QuestionService from "@/service/question.service";
import QuizService from "@/service/quiz.service";
import {
  getBadRequestResponse,
  getConflictResponse,
  getInternalServerErrorResponse,
  getNotFoundResponse,
  getOKResponse,
} from "@/utils/helpers/response";
import { IReq, IRes } from "@/utils/interfaces/express.interface";
import Logging from "@/utils/library/logging";

class QuizController {
  private quizService: QuizService;
  private questionService: QuestionService;
  constructor() {
    this.quizService = new QuizService();
    this.questionService = new QuestionService();
  }

  createQuiz = async (req: IReq, res: IRes) => {
    try {
      const inputData = {
        ...req.body,
        createdBy: req?.userData?._id,
      } as CreateQuizProps;
      const quiz = await this.quizService.saveOne(inputData);
      if (quiz) {
        const message = "Quiz created successfully";
        return getOKResponse(res, quiz, message);
      } else {
        const message = "Quiz not created";
        return getBadRequestResponse(res, message, inputData);
      }
    } catch (error) {
      return getInternalServerErrorResponse(res, error);
    }
  };

  getQuiz = async (req: IReq, res: IRes) => {
    const quizId = req.params.quizId; // Access the quizId from the URL parameters
    const quiz = await this.quizService.findOne(quizId);
    const questions = await this.questionService.findAll({ quizId });
    return getOKResponse(res, { quiz, questions });
  };

  publishQuiz = async (req: IReq, res: IRes) => {
    const { quizId } = { ...req.body } as { quizId: string };
    try {
      const quiz = await this.quizService.publish(quizId);
      if (quiz) {
        const message = "Quiz published successfully";
        return getOKResponse(res, quiz, message);
      } else {
        const message = "Quiz not found";
        return getNotFoundResponse(res, message);
      }
    } catch (error) {
      return getInternalServerErrorResponse(res, error);
    }
  };

  unPublishQuiz = async (req: IReq, res: IRes) => {
    const { quizId } = { ...req.body } as { quizId: string };
    try {
      const quiz = await this.quizService.unPublish(quizId);
      if (quiz) {
        const message = "Quiz unpublished successfully";
        return getOKResponse(res, quiz, message);
      } else {
        const message = "Quiz not found";
        return getNotFoundResponse(res, message);
      }
    } catch (error) {
      return getInternalServerErrorResponse(res, error);
    }
  };

  updateQuiz = async (req: IReq, res: IRes) => {
    const inputData = { ...req.body } as UpdateQuizProps;
    try {
      const quizFound = await this.quizService.findOne(inputData.quizId);
      if (quizFound) {
        Logging.info(req.userData?._id, quizFound?.createdBy);
        if (!req.userData?._id.equals(quizFound.createdBy!))
          return getConflictResponse(
            res,
            "You are not authorized to perform this action"
          );

        if (quizFound.isPublished)
          return getConflictResponse(res, "Published quiz cannot be modified");
        else {
          const quiz = await this.quizService.updateQuiz(inputData);
          const message = "Quiz updated successfully";
          return getOKResponse(res, quiz, message);
        }
      } else {
        const message = "Quiz not found";
        return getNotFoundResponse(res, message);
      }
    } catch (error) {
      return getInternalServerErrorResponse(res, error);
    }
  };

  deleteQuiz = async (req: IReq, res: IRes) => {
    const inputData = { ...req.body } as DeleteQuizProps;
    try {
      const quizFound = await this.quizService.findOne(inputData.quizId);
      if (quizFound) {
        if (quizFound.isPublished)
          return getConflictResponse(res, "Published quiz cannot be modified");
        else {
          await this.quizService.deleteQuiz(inputData.quizId);
          await this.questionService.delQuesForQuiz(inputData.quizId);
          const message = "Quiz deleted successfully";
          return getOKResponse(res, message);
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

export default QuizController;
