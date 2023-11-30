import { CreatePermission } from "@/models/permission/types";
import PermissionService from "@/service/permission.service";
import {
  getConflictResponse,
  getCreateResponse,
  getInternalServerErrorResponse,
} from "@/utils/helpers/response";
import { IReq, IRes } from "@/utils/interfaces/express.interface";

class PermissionController {
  private permissionService: PermissionService;
  constructor() {
    this.permissionService = new PermissionService();
  }

  createPermission = async (req: IReq, res: IRes) => {
    const inputData = { ...req.body } as CreatePermission;
    const permissionExists = await this.permissionService.find(inputData.name);
    try {
      if (permissionExists)
        return getConflictResponse(res, "Permission already exists");
      else {
        const data = await this.permissionService.saveOne(inputData);
        const response = getCreateResponse(
          res,
          "Permission created successfully",
          data
        );
        return response;
      }
    } catch (error) {
      return getInternalServerErrorResponse(res, { error: undefined });
    }
  };
}

export default PermissionController;
