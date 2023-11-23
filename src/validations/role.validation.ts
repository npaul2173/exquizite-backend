import { requiredValidation } from "@/utils/library/validate";

const validation = [requiredValidation("name", "Name")];

export { validation as createRoleValidation };
