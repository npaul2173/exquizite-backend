import { requiredValidation } from "@/utils/library/validate";

const validation = [requiredValidation("accessToken", "Access token")];
export { validation as tokenValidate };
