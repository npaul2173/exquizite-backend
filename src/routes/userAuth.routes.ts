import RegistrationController from "@/controller/user/register.controller";
import { Router } from "express";

class UserAuthRoutes {
  public routes: Router;
  public baseRoute: string;
  public registrationController: RegistrationController;

  constructor() {
    this.routes = Router();
    this.baseRoute = "/user";
    this.registrationController = new RegistrationController();
    this.useRoutes();
  }

  useRoutes() {
    this.post();
  }

  post() {
    this.routes.post("/register", this.registrationController.registerUser);
  }
}

export default UserAuthRoutes;
