import QuizController from "@/controller/quiz.controller";
import { Router } from "express";

class QuizRoutes {
  public routes: Router;
  public baseRoute: string;
  private quizController: QuizController;

  constructor() {
    this.routes = Router();
    this.baseRoute = "/quiz";
    this.quizController = new QuizController();
    this.useRoutes();
  }

  useRoutes() {
    this.post();
  }

  post() {
    this.routes.post("/create", this.quizController.createQuiz);
  }
}

export default QuizRoutes;
