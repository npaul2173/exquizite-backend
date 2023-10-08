import { validateBody } from "@/utils/library/validate";
import { createEmployeeValidation } from "@/validations/Employee";
import { Router } from "express";
const router = Router();

router.post("/create", ...createEmployeeValidation, validateBody, (_, res) => {
  res.send({ message: "Employee Created" });
});

export const employeeRoute = {
  router,
  baseRoute: "/employees",
};
