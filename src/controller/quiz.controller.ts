import { CreateQuizProps, UpdateQuizProps } from "@/models/quiz/interface";
import QuestionService from "@/service/question.service";
import QuizService from "@/service/quiz.service";
import {
  getInternalServerErrorResponse,
  getNoContentResponse,
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
      const inputData = { ...req.body } as CreateQuizProps;
      const response = await this.quizService.create(inputData);
      res.send(response);
    } catch (error) {
      throw new Error("❌ Error: Could not create Quiz");
    }
  };

  getQuiz = async (req: IReq, res: IRes) => {
    // const questions = await Question.find({ quizId });
    const quizId = req.params.quizId; // Access the quizId from the URL parameters
    const quiz = await this.quizService.findOne(quizId);
    const questions = await this.questionService.findAll({ quizId });
    return getOKResponse(res, { quiz, questions });
  };

  publishQuiz = async (_: IReq, res: IRes) => {
    const message = "Quiz published successfully";
    return getNoContentResponse(res, message);
  };

  updateQuiz = async (req: IReq, res: IRes) => {
    const inputData = { ...req.body } as UpdateQuizProps;
    try {
      const quiz = await this.quizService.updateQuiz(inputData);
      if (quiz) {
        const message = "Quiz updated successfully";
        return getOKResponse(res, quiz, message);
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
