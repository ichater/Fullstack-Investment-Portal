import { ACCESS, ROLE } from "@prisma/client";
import { AccountReturnData } from "./AccountReturnData";

export type ClientReturnData = {
  id: string;
  firstName: string;
  lastName: string;
  slug: string;
  email: string;
  profileImage: string;
  password: string;
  bio: string;
  access: ACCESS;
  role: ROLE;
  accounts: AccountReturnData[];
};
