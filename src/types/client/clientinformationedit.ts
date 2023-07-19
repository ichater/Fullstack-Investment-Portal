import { ACCESS } from "@prisma/client";

export type ClientInfoEditState = {
  email: string;
  bio: string;
  access: ACCESS;
};
