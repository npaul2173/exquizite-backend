import { OTPType } from "./index";
export type IOtp = {
  id: string;
  userId: string;
  code: string;
  type: OTPType;
};
