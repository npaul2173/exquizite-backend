import { PermissionModel } from "@/models/permission";
import permissionData from "./mock/permissions.data.json";
import rolesJsonData from "./mock/roles.data.json";
import { MetaDataModel } from "@/models/metadata";
import Logging from "@/utils/library/logging";
import { RoleModel } from "@/models/role";

class DatabaseSeed {
  constructor() {}

  async initializeDatabaseModels() {
    const data = await MetaDataModel.findOne();

    Logging.info(data);
    if (!data) {
      // 1. seeding the permissions collection
      const pmsCreated = await PermissionModel.insertMany(permissionData);

      // 2.  Seeding the default roles
      const rolesInputData = rolesJsonData.map((element) => {
        const permissions = element.except
          ? pmsCreated
              .filter(
                (item) => !element.except.some((ele) => item.name === ele)
              )
              .map((item) => item._id)
          : element.include.map(
              (item) => pmsCreated.find((pms) => pms.name === item)?._id
            );

        return { name: element.name, permissions };
      });
      const rolesCreated = await RoleModel.insertMany(rolesInputData);
      Logging.info(rolesCreated);
    }
  }
}

export default DatabaseSeed;
