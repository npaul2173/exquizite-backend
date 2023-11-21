import { Router } from "express";
import EmployeeRoutes from "./employee.routes";
import QuizRoutes from "./quiz.routes";
import QuestionRoutes from "./question.routes";
import UserAuthRoutes from "./userAuth.routes";
import { sendEmail } from "@/utils/library/mail";
import PermissionRoutes from "./permission.routes";
import RoleRoutes from "./role.routes";

const userAuthRoutes = new UserAuthRoutes();
const employeeRoutes = new EmployeeRoutes();
const quizRoutes = new QuizRoutes();
const questionRoutes = new QuestionRoutes();
const permissionRoutes = new PermissionRoutes();
const roleRoutes = new RoleRoutes();
const router = Router();

router.use(questionRoutes.baseRoute, questionRoutes.routes);
router.use(employeeRoutes.baseRoute, employeeRoutes.routes);
router.use(quizRoutes.baseRoute, quizRoutes.routes);
router.use(userAuthRoutes.baseRoute, userAuthRoutes.routes);
router.use(permissionRoutes.baseRoute, permissionRoutes.routes);
router.use(roleRoutes.baseRoute, roleRoutes.routes);

router.use("/testMail", async (req, res, next) => {
  //   res.send({ message: "hi" });
  const data = await sendEmail(res);
});

export { router };
