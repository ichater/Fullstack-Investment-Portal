import { ACCESS, ROLE } from "@prisma/client";
import { AccountDataParsed } from "./AccountDataParsed";

export type ClientDataParsed = {
  id: string;
  firstName: string;
  lastName: string;
  slug: string;
  email: string;
  profileImage: string;
  bio: string;
  access: ACCESS;
  role: ROLE;
  accounts: AccountDataParsed[];
};
