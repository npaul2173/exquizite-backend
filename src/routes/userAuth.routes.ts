import LoginController from "@/controller/user/login.controller";
import RegistrationController from "@/controller/user/register.controller";
import { validateBody } from "@/utils/library/validate";
import { loginValidate } from "@/validations/user/login.validate";
import { registerValidate } from "@/validations/user/register.validate";
import { Router } from "express";

class UserAuthRoutes {
  public routes: Router;
  public baseRoute: string;
  public registrationController: RegistrationController;
  public loginController: LoginController;

  constructor() {
    this.routes = Router();
    this.baseRoute = "/user";
    this.registrationController = new RegistrationController();
    this.loginController = new LoginController();
    this.useRoutes();
  }

  useRoutes() {
    this.post();
    this.login();
  }

  post() {
    this.routes.post(
      "/register",
      registerValidate,
      validateBody,
      this.registrationController.registerUser
    );
  }
  login() {
    this.routes.post(
      "/login",
      loginValidate,
      validateBody,
      this.loginController.loginUser
    );
  }
}

export default UserAuthRoutes;
