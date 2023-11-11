export type IUserType = {
  id: string;
  userName: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  avatar?: string | null;
  dateOfBirth: string;
  userRoles: string[];
  createdAt: Date;
  updatedAt: Date;
};

export type UserTypeProps = Omit<IUserType, "updatedAt" | "createdAt">;
