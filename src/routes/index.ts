import { Router } from "express";
import { employeeRoute } from "./Employee";

const router = Router();
router.use(employeeRoute.baseRoute, employeeRoute.router);

export { router };
