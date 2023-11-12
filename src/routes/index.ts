import { Router } from "express";
import EmployeeRoutes from "./employee.routes";
import QuizRoutes from "./quiz.routes";
import QuestionRoutes from "./question.routes";
import UserAuthRoutes from "./userAuth.routes";

const userAuthRoutes = new UserAuthRoutes();
const employeeRoutes = new EmployeeRoutes();
const quizRoutes = new QuizRoutes();
const questionRoutes = new QuestionRoutes();
const router = Router();

router.use(questionRoutes.baseRoute, questionRoutes.routes);
router.use(employeeRoutes.baseRoute, employeeRoutes.routes);
router.use(quizRoutes.baseRoute, quizRoutes.routes);
router.use(userAuthRoutes.baseRoute, userAuthRoutes.routes);

export { router };
