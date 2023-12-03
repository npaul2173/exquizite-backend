import QuestionController from "@/controller/question.controller";
import AuthController from "@/controller/user/auth.controller";
import AuthMiddleware from "@/middleware/auth.middleware";
import AppPermissions from "@/utils/enums/permissions";
import { validateBody } from "@/utils/library/validate";
import {
  deleteQuestionValidation,
  questionEditValidation,
} from "@/validations/question/question";
import { Router } from "express";

class QuestionRoutes {
  public routes: Router;
  public baseRoute: string;
  private questionController: QuestionController;
  private authMiddleware: AuthMiddleware;

  constructor() {
    this.routes = Router();
    this.baseRoute = "/question";
    this.questionController = new QuestionController();
    this.authMiddleware = new AuthMiddleware();
    this.useRoutes();
  }

  useRoutes() {
    this.post();
  }

  post() {
    this.routes.post(
      "/create",
      this.authMiddleware.authenticate,
      this.authMiddleware.authorize([AppPermissions.CREATE_QUESTION]),
      this.questionController.createQuestion
    );
    this.routes.post(
      "/createMultiple",
      this.authMiddleware.authenticate,
      this.authMiddleware.authorize([AppPermissions.CREATE_MULTIPLE_QUESTION]),
      this.questionController.createMultipleQuestions
    );
    this.routes.post(
      "/edit",
      this.authMiddleware.authenticate,
      this.authMiddleware.authorize([AppPermissions.EDIT_QUESTION]),
      questionEditValidation,
      validateBody,
      this.questionController.editQuestion
    );
    this.routes.post(
      "/delete",
      this.authController.authenticate,
      this.authMiddleware.authorize([AppPermissions.DELETE_QUESTION]),
      deleteQuestionValidation,
      validateBody,
      this.questionController.deleteQuestion
    );
  }
}

export default QuestionRoutes;
