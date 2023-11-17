import { LoginModel } from "@/models/login";
import { CreateLoginProps, ILogin, LoginUserProps } from "@/models/login/type";
import { UserModel } from "@/models/user";
import { UserProps } from "@/models/user/type";
import Logging from "@/utils/library/logging";

class LoginService {
  async userLogin(inputData: CreateLoginProps) {
    try {
      return await LoginModel.findOneAndUpdate(
        { userId: inputData.userId },
        inputData,
        { upsert: true, new: true }
      );
    } catch (error) {
      throw new Error("❌ Error: Login user service failed" + error);
    }
  }

  async findUserByCredentials(userNameOrEmail: string, password: string) {
    try {
      Logging.info(userNameOrEmail, password);
      return UserModel.find({
        $or: [{ email: userNameOrEmail }, { userName: userNameOrEmail }],
        password,
      });
    } catch (error) {
      throw new Error("❌ Error: Find user Service failed" + error);
    }
  }
}

export default LoginService;
