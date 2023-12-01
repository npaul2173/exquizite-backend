import MailService from "@/service/mail.service";
import AuthService from "@/service/suth.service";
import { getOKResponse } from "@/utils/helpers/response";
import { IReq, IRes } from "@/utils/interfaces/express.interface";

class AuthController {
  private authService: AuthService;
  private mailService: MailService;

  constructor() {
    this.authService = new AuthService();
    this.mailService = new MailService();
  }

  sendOtp = async (req: IReq, res: IRes) => {
    const data = await this.authService.createSixDigitOTP(
      "email",
      req.userData?._id.toString()!
    );

    const response = await this.mailService.sendOTPEmail(data.code);
    return getOKResponse(res, response);
  };
}

export default AuthController;
