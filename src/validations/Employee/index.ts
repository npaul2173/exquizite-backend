import { requiredValidation } from "@/utils/library/validate";

const validation = [
  requiredValidation("firstName", "FirstName"),
  requiredValidation("lastName", "LastName"),
];

export { validation as createEmployeeValidation };
