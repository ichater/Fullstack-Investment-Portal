import { ACCESS } from "@prisma/client";

export interface ClientInfoEditState {
  email: string;
  bio: string;
  access: ACCESS;
}
