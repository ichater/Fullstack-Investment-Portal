import { ACCESS } from "@prisma/client";

export type BasicClientInformation = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  bio: string;
  access: ACCESS;
  profileImage: string;
};
