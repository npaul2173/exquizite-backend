import AuthController from "@/controller/user/auth.controller";
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
  private authController: AuthController;
  constructor() {
    this.routes = Router();
    this.baseRoute = "/user";
    this.registrationController = new RegistrationController();
    this.loginController = new LoginController();
    this.authController = new AuthController();
    this.useRoutes();
  }

  useRoutes() {
    this.post();
  }

  post() {
    this.routes.get(
      "/authenticate",
      this.authController.authenticate,
      (req, res) => {
        res.send({ message: "Im ok!", data: req.userData });
      }
    );
    this.routes.post(
      "/register",
      registerValidate,
      validateBody,
      this.registrationController.registerUser
    );
    this.routes.post(
      "/login",
      loginValidate,
      validateBody,
      this.loginController.loginUser
    );

    this.routes.post("./sendOtpEmail", this.authController.sendOtp);
  }
}

export default UserAuthRoutes;
