import { RoleModel } from "@/models/role";
import { CreateRoleProps } from "@/models/role/interface";

class RoleService {
  async saveOne(inputData: CreateRoleProps) {
    try {
      return await RoleModel.create(inputData);
    } catch (error) {
      console.log(error);

      throw new Error("❌ Error: Create Role service failed");
    }
  }
}

export default RoleService;
