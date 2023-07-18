import { ACCESS, Account, Adviser, Client, ROLE, Review } from "@prisma/client";

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
  profileImage: string;
  bio: string;
  adviserId: string;
  role: ROLE;
  access: ACCESS;
  accounts: Account[];
  reviews: Review[];

  constructor(
    firstName: string = "Jane",
    lastName: string = "Doe",
    slug: string = `${firstName.toLowerCase()}-${lastName.toLowerCase()}`,
    id: string = slug,
    bio: string = "Investing for the monies!",
    email: string = "jDoe@pleb.com.au",
    profileImage: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzq8hRZkv-2JFKAUssJlIqdDsFUUv3ptbVLA&usqp=CAU",
    adviserId: string = "",
    role: ROLE = ROLE.CLIENT,
    access: ACCESS = ACCESS.READONLY,
    accounts: Account[] = [],
    reviews: Review[] = []
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.slug = slug;
    this.bio = bio;
    this.email = email;
    this.profileImage = profileImage;
    this.adviserId = adviserId;
    this.role = role;
    this.access = access;
    this.accounts = accounts;
    this.reviews = reviews;
  }
}
