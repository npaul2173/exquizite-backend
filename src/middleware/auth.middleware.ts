import { IReq, IRes, INext } from "@/utils/interfaces/express.interface";
import Logging from "@/utils/library/logging";
import AppPermissions from "@/utils/enums/permissions";
import { getUnauthorizedResponse } from "@/utils/helpers/response";

class AuthMiddleware {
  authorize = (appPermissions: AppPermissions[]) => {
    return (req: IReq, res: IRes, next: INext) => {
      const permissions = req.userRoles?.permissions.map((item) =>
        item.toString()
      );
      const hasPermission = appPermissions.every((item) =>
        permissions?.includes(item)
      );
      if (hasPermission) next();
      else return getUnauthorizedResponse(res, "Permission denied");
    };
  };
}

export default AuthMiddleware;
