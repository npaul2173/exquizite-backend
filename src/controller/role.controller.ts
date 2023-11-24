import { CreateRoleProps } from "@/models/role/interface";
import RoleService from "@/service/role.service";
import { getCreateResponse } from "@/utils/helpers/response";
import { IReq, IRes } from "@/utils/interfaces/express.interface";

class RoleController {
  private roleService: RoleService;

  constructor() {
    this.roleService = new RoleService();
  }
  createRole = async (req: IReq, res: IRes) => {
    const inputData = { ...req.body } as CreateRoleProps;
    try {
      const data = await this.roleService.saveOne(inputData);
      const message = "Role created successfully";
      return getCreateResponse(res, message, data);
    } catch (error) {
      throw new Error("❌ Error: Could not create Role");
    }
  };
}

export default RoleController;
