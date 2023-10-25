import { QuizModel } from "@/models/quiz";
import { CreateQuizProps, GetQuizProps } from "@/models/quiz/interface";
import QuizService from "@/service/quiz.service";
import { getOKResponse } from "@/utils/helpers/response";
import { IReq, IRes } from "@/utils/interfaces/express.interface";
import { JsonResponse } from "@/utils/interfaces/response.interface";

class QuizController {
  private quizService: QuizService;

  constructor() {
    this.quizService = new QuizService();
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
    const response = getOKResponse(quiz);
    res.send(response);
  };
}

export default QuizController;
