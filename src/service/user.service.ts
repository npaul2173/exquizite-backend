import { UserModel } from "@/models/user";
import { CreateUserProps } from "@/models/user/type";

class UserService {
  async findByUserNameOrEmail(userName: string, email: string) {
    try {
      return await UserModel.findOne({ $or: [{ email }, { userName }] });
    } catch (error) {
      throw new Error("❌ Error: Find user Service failed" + error);
    }
  }

  async findUserById(id: string) {
    try {
      return await UserModel.findById(id);
    } catch (error) {
      throw new Error("❌ Error: Find user Service by ID failed" + error);
    }
  }
  async createUser(inputData: CreateUserProps) {
    try {
      // isEmailVerified is made true by default for now. Will be made false when email verification module is complete
      const inputDataNew = { ...inputData, isEmailVerified: true };
      return await UserModel.create(inputDataNew);
    } catch (error) {
      throw new Error("❌ Error: Create user service failed" + error);
    }
  }
}

export default UserService;
