import { UserModel } from "@/models/user";
import { CreateUserProps } from "@/models/user/type";

class UserService {
  async findByUserName(userName: string) {
    try {
      return await UserModel.find({ userName });
    } catch (error) {
      throw new Error("❌ Error: Find user Service failed" + error);
    }
  }

  async createUser(inputData: CreateUserProps) {
    try {
      console.log(inputData);

      return await UserModel.create(inputData);
    } catch (error) {
      throw new Error("❌ Error: Create user service failed" + error);
    }
  }
}

export default UserService;
