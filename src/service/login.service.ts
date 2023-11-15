import { LoginModel } from "@/models/login";
import { LoginProps } from "@/models/login/type";

class LoginService {
  async userLogin(inputData: LoginProps) {
    try {
      return await LoginModel.create(inputData);
    } catch (error) {
      throw new Error("❌ Error: Login user service failed" + error);
    }
  }
}

export default LoginService;
