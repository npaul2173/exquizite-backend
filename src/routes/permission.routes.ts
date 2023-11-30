import PermissionController from "@/controller/permission.controller";
import AuthMiddleware from "@/middleware/auth.middleware";
import AppPermissions from "@/utils/enums/permissions";
import { validateBody, validateRequest } from "@/utils/library/validate";
import { createPermissionValidation } from "@/validations/permission";
import { Router } from "express";

class PermissionRoutes {
  public routes: Router;
  public baseRoute: string;
  private permissionController: PermissionController;
  private authMiddleware: AuthMiddleware;

  constructor() {
    this.routes = Router();
    this.baseRoute = "/permission";
    this.permissionController = new PermissionController();
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
      this.authMiddleware.authorize([AppPermissions.CREATE_PERMISSION]),
      validateRequest(createPermissionValidation),
      this.permissionController.createPermission
    );
  }
}

export default PermissionRoutes;
