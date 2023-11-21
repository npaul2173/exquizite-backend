import { envVar } from "@/index";
import { CreateLoginProps, LoginUserProps } from "@/models/session/type";
import LoginService from "@/service/login.service";
import {
  getInternalServerErrorResponse,
  getOKResponse,
  getUnauthorizedResponse,
} from "@/utils/helpers/response";
import { IReq, IRes } from "@/utils/interfaces/express.interface";
import Logging from "@/utils/library/logging";
import jwt from "jsonwebtoken";

class LoginController {
  private loginService: LoginService;
  constructor() {
    this.loginService = new LoginService();
  }

  loginUser = async (req: IReq, res: IRes) => {
    const inputData = { ...req.body } as LoginUserProps;
    try {
      const userFound = await this.loginService.findUserByCredentials(
        inputData
      );

      if (userFound) {
        const accessToken = jwt.sign(
          {
            roleId: userFound.userRoleId,
            userId: userFound._id,
          },
          envVar.JSON_SECRET_KEY,
          { expiresIn: "1h" }
        );

        Logging.warn({ data: jwt.decode(accessToken) });
        const loginObj: CreateLoginProps = {
          userId: userFound._id,
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
