import { ClientDataParsed } from "./ClientDataparsed";

export type AdviserDataParsed = {
  id: string;
  firstName: string;
  lastName: string;
  slug: string;
  email: string;
  profileImage: string;
  bio: string;
  company: string;
  city: string;
  phone: string;
  clients: ClientDataParsed[] | [];
};
