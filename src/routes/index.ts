import { Router } from "express";
import EmployeeRoutes from "./employee.routes";
import QuizRoutes from "./quiz.routes";

const employeeRoutes = new EmployeeRoutes();
const quizRoutes = new QuizRoutes();
const router = Router();

router.use(employeeRoutes.baseRoute, employeeRoutes.routes);
router.use(quizRoutes.baseRoute, quizRoutes.routes);

export { router };
