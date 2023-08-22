import { ACCESS, Account, Adviser, Client, ROLE } from "@prisma/client";

export class ClientBuilder {
  client: Client;
  constructor(firstName: string) {
    this.client = new ClientInstance(firstName);
  }
  setAviserId(adviserId: string) {
    this.client.adviserId = adviserId;
    return this;
  }
  setFirstName(firstName: string) {
    this.client.firstName = firstName;
    return this;
  }
  setLastName(lastName: string) {
    this.client.lastName = lastName;
    return this;
  }
  setEmail(email: string) {
    this.client.email = email;
    return this;
  }
  setProfileimage(profileImage: string) {
    this.client.profileImage = profileImage;
    return this;
  }
  setAdvisorId(adviserId: string) {
    this.client.adviserId = adviserId;
    return this;
  }
  setAccess(access: ACCESS) {
    this.client.access = access;
    return this;
  }

  setRole(role: ROLE) {
    this.client.role = role;
    return this;
  }

  setBio(bio: string) {
    this.client.bio = bio;
    return this;
  }

  build(): Client {
    return this.client;
  }
}

class ClientInstance {
  firstName: string;
  id: string;
  lastName: string;
  slug: string;
  email: string;
  password: string;
  profileImage: string;
  bio: string;
  adviserId: string;
  role: ROLE;
  access: ACCESS;
  accounts: Account[];

  constructor(
    firstName: string = "Jane",
    lastName: string = "Doe",
    slug: string = `${firstName.toLowerCase()}-${lastName.toLowerCase()}`,
    id: string = slug,
    password: string = "SomeClient123!",
    bio: string = "Investing for the monies!",
    email: string = "jDoe@pleb.com.au",
    profileImage: string = "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=",
    adviserId: string = "",
    role: ROLE = ROLE.CLIENT,
    access: ACCESS = ACCESS.READONLY,
    accounts: Account[] = []
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.slug = slug;
    this.bio = bio;
    this.email = email;
    this.profileImage = profileImage;
    this.adviserId = adviserId;
    this.role = role;
    this.access = access;
    this.accounts = accounts;
  }
}
