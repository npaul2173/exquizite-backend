import RoleController from "@/controller/role.controller";
import { validateBody } from "@/utils/library/validate";
import { createPermissionValidation } from "@/validations/permission";
import { createRoleValidation } from "@/validations/role.validation";
import { Router } from "express";

class RoleRoutes {
  public routes: Router;
  public baseRoute: string;
  private roleController: RoleController;

  constructor() {
    this.routes = Router();
    this.baseRoute = "/role";
    this.roleController = new RoleController();
    this.useRoutes();
  }

  useRoutes() {
    this.post();
  }

  post() {
    this.routes.post(
      "/create",
      createRoleValidation,
      validateBody,
      this.roleController.createRole
    );
  }
}

export default RoleRoutes;
