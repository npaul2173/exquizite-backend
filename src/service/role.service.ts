import { RoleModel } from "@/models/role";
import { CreateRoleProps } from "@/models/role/interface";

class RoleService {
  async getUserRole() {
    try {
      return await RoleModel.findOne({ name: "USER" });
    } catch (error) {
      throw new Error("❌ Error:Get user role service failed");
    }
  }
  async findRoleById(roleId: string) {
    try {
      return await RoleModel.findById(roleId);
    } catch (error) {
      throw new Error("❌ Error:Get user role service failed");
    }
  }
  async saveOne(inputData: CreateRoleProps) {
    try {
      return await RoleModel.create(inputData);
    } catch (error) {
      throw new Error("❌ Error: Create Role service failed");
    }
  }
}

export default RoleService;
