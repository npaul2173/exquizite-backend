import { ILogin, UserFromTokenBody } from "@/models/login/type";
import LoginService from "@/service/login.service";
import {
  getInternalServerErrorResponse,
  getNotFoundResponse,
  getOKResponse,
} from "@/utils/helpers/response";
import { IReq, IRes } from "@/utils/interfaces/express.interface";

class TokenController {
  private loginService: LoginService;
  constructor() {
    this.loginService = new LoginService();
  }

  getUser = async (req: IReq, res: IRes) => {
    const tokenData = { ...req.body } as UserFromTokenBody;
    try {
      const userData: ILogin | null = await this.loginService.findUserByToken(
        tokenData.accessToken
      );
      if (userData) {
        const message = "User Found Successfully";
        return getOKResponse(res, userData, message);
      } else {
        const message = "User Not Found";
        return getNotFoundResponse(res, message);
      }
    } catch (error) {
      const message = "Internal Server Error";
      console.error("❌ Error: Could not Login user", error);
      return getInternalServerErrorResponse(res, message);
    }
  };
}

export default TokenController;
