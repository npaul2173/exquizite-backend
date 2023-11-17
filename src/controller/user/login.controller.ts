import { envVar } from "@/index";
import { CreateLoginProps, LoginUserProps } from "@/models/login/type";
import LoginService from "@/service/login.service";
import UserService from "@/service/user.service";
import {
  getInternalServerErrorResponse,
  getOKResponse,
  getUnauthorizedResponse,
} from "@/utils/helpers/response";
import { IReq, IRes } from "@/utils/interfaces/express.interface";
import jwt from "jsonwebtoken";

class LoginController {
  private loginService: LoginService;
  constructor() {
    this.loginService = new LoginService();
  }

  loginUser = async (req: IReq, res: IRes) => {
    const inputData = { ...req.body } as LoginUserProps;
    try {
      const loginData = await this.loginService.findUserByCredentials(
        inputData.userNameOrEmail,
        inputData.password
      );

      if (!!loginData.length) {
        const { userName, email, _id } = loginData[0];
        const accessToken = jwt.sign(
          {
            email: inputData.userNameOrEmail,
          },
          envVar.JSON_SECRET_KEY,
          { expiresIn: "1h" }
        );
        const loginObj: CreateLoginProps = {
          userName,
          email,
          userId: _id,
          accessToken,
        };
        const serviceResponse = await this.loginService.userLogin(loginObj);
        const message = "Login successful";
        return getOKResponse(res, serviceResponse, message);
      } else {
        const message = "Incorrect username/password";
        return getUnauthorizedResponse(res, message);
      }
    } catch (error) {
      const message = "Internal Server Error";
      console.error("❌ Error: Could not Login user", error);
      return getInternalServerErrorResponse(res, message);
    }
  };
}

export default LoginController;
