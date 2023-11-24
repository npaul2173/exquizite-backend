import QuizController from "@/controller/quiz.controller";
import AuthController from "@/controller/user/auth.controller";
import { validateBody } from "@/utils/library/validate";
import { updateQuizValidation } from "@/validations/quiz";
import { Router } from "express";

class QuizRoutes {
  public routes: Router;
  public baseRoute: string;
  private quizController: QuizController;
  private authController: AuthController;
  constructor() {
    this.routes = Router();
    this.baseRoute = "/quiz";
    this.quizController = new QuizController();
    this.authController = new AuthController();
    this.useRoutes();
  }

  useRoutes() {
    this.post();
    this.get();
  }

  get() {
    this.routes.get("/:quizId", this.quizController.getQuiz);
  }
  post() {
    this.routes.post("/publish", this.quizController.publishQuiz);
    this.routes.post("/create", this.quizController.createQuiz);
    this.routes.post(
      "/update",
      this.authController.authenticate,
      updateQuizValidation,
      validateBody,
      this.quizController.updateQuiz
    );
  }
}

export default QuizRoutes;
