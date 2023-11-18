import { LoginModel } from "@/models/login";
import { CreateLoginProps, ILogin, LoginUserProps } from "@/models/login/type";
import { UserModel } from "@/models/user";
import { UserProps } from "@/models/user/type";
import Logging from "@/utils/library/logging";
import bcrypt from "bcrypt";

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
      const users = await UserModel.find({
        $or: [{ email: userNameOrEmail }, { userName: userNameOrEmail }],
      });

      if (!users || users.length === 0) {
        return [];
      }

      const user = users[0];

      const isPassMatch: boolean = await new Promise((resolve) => {
        bcrypt.compare(password, user.password, (_err, isMatch) => {
          resolve(isMatch);
        });
      });
      if (isPassMatch) {
        return users;
      } else {
        return [];
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
