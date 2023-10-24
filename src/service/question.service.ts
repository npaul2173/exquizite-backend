import { QuestionModel } from "@/models/question";
import { CreateQuestionProps } from "@/models/question/interface";
import { IQuiz } from "@/models/quiz/interface";

class QuestionService {
  async saveOne(inputData: CreateQuestionProps, quiz: IQuiz) {
    try {
      return await QuestionModel.create(inputData);
    } catch (error) {
      throw new Error("❌ Error: Quiz Save service failed");
    }
  }
}

export default QuestionService;
