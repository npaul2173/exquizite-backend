import { Router } from "express";
import EmployeeRoutes from "./Employee";

const employeeRoutes = new EmployeeRoutes();

const router = Router();
router.use(employeeRoutes.baseRoute, employeeRoutes.routes);

export { router };
