import QuizController from "@/controller/quiz.controller";
import AuthController from "@/controller/user/auth.controller";
import AuthMiddleware from "@/middleware/auth.middleware";
import AppPermissions from "@/utils/enums/permissions";
import { validateBody } from "@/utils/library/validate";
import {
  deleteValidation,
  publishValidation,
  updateQuizValidation,
} from "@/validations/quiz";
import { Router } from "express";

class QuizRoutes {
  public routes: Router;
  public baseRoute: string;
  private quizController: QuizController;
  private authController: AuthController;
  private authMiddleware: AuthMiddleware;
  constructor() {
    this.routes = Router();
    this.baseRoute = "/quiz";
    this.quizController = new QuizController();
    this.authController = new AuthController();
    this.authMiddleware = new AuthMiddleware();
    this.useRoutes();
  }

  useRoutes() {
    this.post();
    this.get();
  }

  get() {
    this.routes.get(
      "/:quizId",
      this.authController.authenticate,
      // this.authMiddleware.authorize([AppPermissions.VIEW_QUIZ]),
      this.quizController.getQuiz
    );
  }
  post() {
    this.routes.post(
      "/unPublish",
      this.authController.authenticate,
      publishValidation,
      validateBody,
      this.quizController.unPublishQuiz
    );
    this.routes.post(
      "/publish",
      this.authController.authenticate,
      publishValidation,
      validateBody,
      this.quizController.publishQuiz
    );
    this.routes.post("/create", this.quizController.createQuiz);
    this.routes.post(
      "/update",
      this.authController.authenticate,
      updateQuizValidation,
      validateBody,
      this.quizController.updateQuiz
    );
    this.routes.post(
      "/delete",
      this.authController.authenticate,
      this.authMiddleware.authorize([AppPermissions.DELETE_QUIZ]),
      deleteValidation,
      validateBody,
      this.quizController.deleteQuiz
    );
  }
}

export default QuizRoutes;
