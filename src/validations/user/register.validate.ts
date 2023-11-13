// export type IUser = {
//     id: string;
//     userName: string;
//     email: string;
//     password: string;
//     firstName: string;
//     lastName: string;
//     avatar?: string | null;
//     dateOfBirth: string;
//     // userRoles: string[];
//     isEmailVerified?: boolean;
//     createdAt: Date;
//     updatedAt: Date;
//   };

import { requiredValidation } from "@/utils/library/validate";
import { ValidationChain, checkExact } from "express-validator";

const validation = [
  requiredValidation("userName", "Username"),
  requiredValidation("email", "Email").isEmail(),
  requiredValidation("password", "Password")
    .isLength({ min: 8 })
    .withMessage("Password has to be minimum of 8 letters"),
  requiredValidation("firstName", "FirstName"),
  requiredValidation("lastName", "LastName"),
];

export { validation as registerValidate };
