import { PermissionModel } from "@/models/permission";
import { CreatePermission } from "@/models/permission/types";

class PermissionService {
  async saveOne(inputData: CreatePermission) {
    try {
      return await PermissionModel.create(inputData);
    } catch (error) {
      throw new Error("❌ Error: Permission Save service failed");
    }
  }
}

export default PermissionService;
