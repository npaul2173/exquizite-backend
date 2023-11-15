import { LoginUserProps } from "@/models/login/type";
import LoginService from "@/service/login.service";
import UserService from "@/service/user.service";
import { getOKResponse } from "@/utils/helpers/response";
import { IReq, IRes } from "@/utils/interfaces/express.interface";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";

class LoginController {
  private userService: UserService;
  private loginService: LoginService;
  constructor() {
    this.userService = new UserService();
    this.loginService = new LoginService();
  }

  loginUser = async (req: IReq, res: IRes) => {
    const inputData = { ...req.body } as LoginUserProps;
    try {
      const loginData = await this.userService.findByUserNameOrEmail(
        inputData.userNameOrEmail,
        inputData.userNameOrEmail
      );
      if (loginData.length) {
        const token = jwt.sign(
          {
            email: inputData.userNameOrEmail,
          },
          "token123"
        );
        const serviceResponse = await this.loginService.userLogin(inputData);
        const message = "Login successful";
        return getOKResponse(res, message, serviceResponse);
      }
    } catch (error) {
      throw new Error("❌ Error: Could not Login user");
    }
  };
}

export default LoginController;
