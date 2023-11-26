import PermissionService from "@/service/permission.service";
import fs from "fs";
import path from "path";

async function generatePermissionEnums() {
  const permissionService = new PermissionService();
  const list = await permissionService.list();
  const enumString = `enum AppPermissions { \n ${list
    .map((item) => `${item.name} = "${item._id}"`)
    .join(",\n")}\n}\n\nexport default AppPermissions;\n`;

  const directory = path.join(__dirname, "../enums/");
  fs.writeFileSync(path.join(directory, "permissions.ts"), enumString);
}

export default generatePermissionEnums;
