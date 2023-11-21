import { SchemaTypeOptions } from "mongoose";

export type IRole = {
  name: string;
  permissions: string[];
  createdAt: Date;
  updatedAt: Date;
};

export type CreateRoleProps = Omit<IRole, "createdAt" | "updatedAt">;
