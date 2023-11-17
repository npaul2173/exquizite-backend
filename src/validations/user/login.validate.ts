import { requiredValidation } from "@/utils/library/validate";

const validation = [
  requiredValidation("userNameOrEmail", "userNameOrEmail"),
  requiredValidation("password", "Password"),
];

export { validation as loginValidate };
