import { CreateUserProps } from "@/models/user/type";
import UserService from "@/service/user.service";
import { hashText } from "@/utils/helpers/hashPass";
import {
  getConflictResponse,
  getCreateResponse,
} from "@/utils/helpers/response";
import { IReq, IRes } from "@/utils/interfaces/express.interface";

class RegistrationController {
  private userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  registerUser = async (req: IReq, res: IRes) => {
    const inputData = { ...req.body } as CreateUserProps;
    try {
      const userData = await this.userService.findByUserNameOrEmail(
        inputData.userName,
        inputData.email
      );

      if (userData) {
        const message = "User already exists with that username/email";
        return getConflictResponse(res, message);
      } else {
        const hashPass = await hashText(inputData.password);
        if (hashPass) {
          const serviceResponse = await this.userService.createUser({
            ...inputData,
            userRoleId: "655c1d6c346a2d6b6d7d23d6",
            password: hashPass,
          });
          const message = "Registration successful";
          return getCreateResponse(res, message, serviceResponse);
        } else {
          throw new Error("❌ Error: Could not register user");
        }
      }
    } catch (error) {
      throw new Error("❌ Error: Could not register user");
    }
  };
}

export default RegistrationController;
