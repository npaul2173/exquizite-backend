import PermissionController from "@/controller/permission.controller";
import { validateBody } from "@/utils/library/validate";
import { createPermissionValidation } from "@/validations/permission";
import { Router } from "express";

class PermissionRoutes {
  public routes: Router;
  public baseRoute: string;
  private permissionController: PermissionController;

  constructor() {
    this.routes = Router();
    this.baseRoute = "/permission";
    this.permissionController = new PermissionController();
    this.useRoutes();
  }

  useRoutes() {
    this.post();
  }

  post() {
    this.routes.post(
      "/create",
      createPermissionValidation,
      validateBody,
      this.permissionController.createPermission
    );
  }
}

export default PermissionRoutes;
