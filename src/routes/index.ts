import MailService from "@/service/mail.service";
import {
  getInternalServerErrorResponse,
  getOKResponse,
} from "@/utils/helpers/response";
import { Router } from "express";
import EmployeeRoutes from "./employee.routes";
import PermissionRoutes from "./permission.routes";
import QuestionRoutes from "./question.routes";
import QuizRoutes from "./quiz.routes";
import RoleRoutes from "./role.routes";
import UserAuthRoutes from "./userAuth.routes";

const userAuthRoutes = new UserAuthRoutes();
const employeeRoutes = new EmployeeRoutes();
const quizRoutes = new QuizRoutes();
const questionRoutes = new QuestionRoutes();
const permissionRoutes = new PermissionRoutes();
const roleRoutes = new RoleRoutes();

const mailService = new MailService();
const router = Router();

router.use(questionRoutes.baseRoute, questionRoutes.routes);
router.use(employeeRoutes.baseRoute, employeeRoutes.routes);
router.use(quizRoutes.baseRoute, quizRoutes.routes);
router.use(userAuthRoutes.baseRoute, userAuthRoutes.routes);
router.use(permissionRoutes.baseRoute, permissionRoutes.routes);
router.use(roleRoutes.baseRoute, roleRoutes.routes);

router.use("/testMail", async (req, res, next) => {
  const { error, info, message } = await mailService.greetingsMail(
    "npaul2173@gmail.com"
  );
  if (error) return getInternalServerErrorResponse(res, error, message);
  return getOKResponse(res, info, message);
});

export { router };
