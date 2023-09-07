import { ClientReturnData } from "./ClientReturnData";

export type AdviserReturnData = {
  id: string;
  firstName: string;
  lastName: string;
  slug: string;
  email: string;
  profileImage: string;
  password: string;
  bio: string;
  company: string;
  city: string;
  phone: string;
  clients: ClientReturnData[];
};
