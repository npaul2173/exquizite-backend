import { isUpperSnakeCase } from "@/utils/helpers/checks";
import { requiredValidation } from "@/utils/library/validate";
import { body } from "express-validator";

const validation = [
  requiredValidation("name", "Name").custom((value) => {
    if (!isUpperSnakeCase(value)) {
      throw new Error("Input must be in UPPER SNAKE CASE");
    }
    return true;
  }),
  requiredValidation("description", "Description"),
];

export { validation as createPermissionValidation };
