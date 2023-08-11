import { ACCESS } from "@prisma/client";

export type AdviserAddClientState = {
  firstName: string;
  lastName: string;
  email: string;
  bio: string;
  access: ACCESS;
  password: string;
};
