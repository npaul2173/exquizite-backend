import { CreatePermission } from "@/models/permission/types";
import PermissionService from "@/service/permission.service";
import { getCreateResponse } from "@/utils/helpers/response";
import { IReq, IRes } from "@/utils/interfaces/express.interface";

class PermissionController {
  private permissionService: PermissionService;
  constructor() {
    this.permissionService = new PermissionService();
  }

  createPermission = async (req: IReq, res: IRes) => {
    const inputData = { ...req.body } as CreatePermission;
    const data = await this.permissionService.saveOne(inputData);
    const response = getCreateResponse(
      res,
      "Permission created successfully",
      data
    );
    return response;
  };
}

export default PermissionController;
