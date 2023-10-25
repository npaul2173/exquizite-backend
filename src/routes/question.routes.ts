import QuestionController from "@/controller/question.controller";
import { Router } from "express";

class QuestionRoutes {
  public routes: Router;
  public baseRoute: string;
  private questionController: QuestionController;

  constructor() {
    this.routes = Router();
    this.baseRoute = "/question";
    this.questionController = new QuestionController();
    this.useRoutes();
  }

  useRoutes() {
    this.post();
  }

  post() {
    this.routes.post("/create", this.questionController.createQuestion);
    this.routes.post(
      "/createMultiple",
      this.questionController.createMultipleQuestions
    );
  }
}

export default QuestionRoutes;
