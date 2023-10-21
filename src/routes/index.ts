import { Router } from "express";
import EmployeeRoutes from "./employee";

const employeeRoutes = new EmployeeRoutes();

const router = Router();
router.use(employeeRoutes.baseRoute, employeeRoutes.routes);

export { router };
