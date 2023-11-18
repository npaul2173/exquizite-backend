import { requiredValidation } from "@/utils/library/validate";

const validation = [requiredValidation("accessToken", "accessToken")];
export { validation as tokenValidate };
