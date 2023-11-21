import { LoginModel } from "@/models/session";
import { CreateLoginProps, LoginUserProps } from "@/models/session/type";
import { comparePassHash } from "@/utils/helpers/hashPass";
import UserService from "./user.service";
import Logging from "@/utils/library/logging";

class LoginService {
  private userService: UserService;
  constructor() {
    this.userService = new UserService();
  }
  async userLogin(inputData: CreateLoginProps) {
    Logging.info(inputData);
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

  async findUserByCredentials(inputData: LoginUserProps) {
    try {
      const { userNameOrEmail, password } = { ...inputData };
      const user = await this.userService.findByUserNameOrEmail(
        userNameOrEmail,
        userNameOrEmail
      );

      if (!user) {
        return null;
      } else {
        const isPassMatch = await comparePassHash(password, user.password);
        if (isPassMatch) {
          return user;
        } else {
          return null;
        }
      }
    } catch (error) {
      throw new Error("❌ Error: Find user service failed - " + error);
    }
  }

  async findUserByToken(accessToken: string) {
    try {
      return await LoginModel.findOne({ accessToken });
    } catch (error) {
      throw new Error("❌ Error: Find user service failed" + error);
    }
  }
}

export default LoginService;
