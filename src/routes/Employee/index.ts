import EmployeeController from "@/controller/Employee";
import { IRes } from "@/utils/interfaces/express.interface";
import { validateBody } from "@/utils/library/validate";
import { createEmployeeValidation } from "@/validations/Employee";
import { Router } from "express";
// const router = Router();

// router.post("/create", ...createEmployeeValidation, validateBody, (_, res) => {
//   res.send({ message: "Employee Created" });
// });

// export const employeeRoute = {
//   router,
//   baseRoute: "/employees",
// };

class EmployeeRoutes {
  public routes: Router;
  public baseRoute: string;
  private employeeController: EmployeeController;

  constructor() {
    this.routes = Router();
    this.baseRoute = "/employees";
    this.employeeController = new EmployeeController();
    this.useRoutes();
  }

  useRoutes() {
    this.post();
    this.get();
  }

  get() {
    this.routes.get("/list", this.employeeController.listEmployee);
  }
  post() {
    this.routes.post(
      "/create",
      ...createEmployeeValidation,
      validateBody,
      this.employeeController.createEmployee
    );
  }
}

export default EmployeeRoutes;
