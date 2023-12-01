import { OtpModel } from "@/models/otp";
import crypto from "crypto";

class AuthService {
  async createSixDigitOTP(type: "mobile" | "email", userId: string) {
    const otpCode = crypto.randomInt(100000, 1000000);
    const response = await OtpModel.create({ type, userId, code: otpCode });
    return response;
  }
}

export default AuthService;
