import { CreateQuizProps } from "@/models/quiz/interface";
import QuizService from "@/service/quiz.service";
import { IReq, IRes } from "@/utils/interfaces/express.interface";

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
}

export default QuizController;
