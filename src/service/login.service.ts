import { LoginModel } from "@/models/login";
import { CreateLoginProps, ILogin, LoginUserProps } from "@/models/login/type";
import { UserModel } from "@/models/user";
import { UserProps } from "@/models/user/type";
import Logging from "@/utils/library/logging";
import bcrypt from "bcrypt";
import UserService from "./user.service";
import { comparePassHash } from "@/utils/helpers/hashPass";

class LoginService {
  private userService: UserService;
  constructor() {
    this.userService = new UserService();
  }
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
