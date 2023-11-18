import LoginController from "@/controller/user/login.controller";
import RegistrationController from "@/controller/user/register.controller";
import TokenController from "@/controller/user/token.controller";
import { validateBody } from "@/utils/library/validate";
import { loginValidate } from "@/validations/user/login.validate";
import { registerValidate } from "@/validations/user/register.validate";
import { tokenValidate } from "@/validations/user/token.validate";
import { Router } from "express";

class UserAuthRoutes {
  public routes: Router;
  public baseRoute: string;
  public registrationController: RegistrationController;
  public loginController: LoginController;
  public tokenController: TokenController;

  constructor() {
    this.routes = Router();
    this.baseRoute = "/user";
    this.registrationController = new RegistrationController();
    this.loginController = new LoginController();
    this.tokenController = new TokenController();
    this.useRoutes();
  }

  useRoutes() {
    this.post();
    this.login();
    this.token();
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
  token() {
    this.routes.post(
      "/getUser",
      tokenValidate,
      validateBody,
      this.tokenController.getUser
    );
  }
}

export default UserAuthRoutes;
