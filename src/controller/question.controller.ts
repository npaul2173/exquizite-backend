import { CreateQuestionProps } from "@/models/question/interface";
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
        const response = await this.questionService.saveOne(inputData, quiz);
        res.send(getConflictResponse("Quiz Created", response));
      } else {
        res.send(getConflictResponse("Not a valid quizId"));
      }
    } catch (error) {
      throw new Error("☣️ Error: Could not add Question");
    }
  };

  createMultipleQuestions = async (_: IReq, res: IRes) => {
    try {
      const response = getCreateResponse("Question successfully created");
      res.send(response);
    } catch (error) {
      throw new Error("❌ Error: Could not create questions");
    }
  };
}

export default QuestionController;