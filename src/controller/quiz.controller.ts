import { QuizModel } from "@/models/quiz";
import { CreateQuizProps, GetQuizProps } from "@/models/quiz/interface";
import QuestionService from "@/service/question.service";
import QuizService from "@/service/quiz.service";
import { getOKResponse } from "@/utils/helpers/response";
import { IReq, IRes } from "@/utils/interfaces/express.interface";
import { JsonResponse } from "@/utils/interfaces/response.interface";

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
    const response = getOKResponse({ quiz, questions });
    res.send(response);
  };
}

export default QuizController;
