import { PermissionModel } from "@/models/permission";
import { CreatePermission } from "@/models/permission/types";

class PermissionService {
  async find(permissionName: string) {
    try {
      return await PermissionModel.findOne({ name: permissionName });
    } catch (error) {
      throw new Error("❌ Error: Permission Save service failed");
    }
  }

  async saveOne(inputData: CreatePermission) {
    try {
      return await PermissionModel.create(inputData);
    } catch (error) {
      throw new Error("❌ Error: Permission Save service failed");
    }
  }
  async list() {
    try {
      return await PermissionModel.find();
    } catch (error) {
      throw new Error("❌ Error: Permission Save service failed");
    }
  }
}

export default PermissionService;
