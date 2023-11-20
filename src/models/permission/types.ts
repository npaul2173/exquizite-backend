import { type } from "os";

export type IPermission = {
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

export type CreatePermission = Omit<IPermission, "createdAt" | "updatedAt">;
