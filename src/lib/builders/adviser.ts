import { Adviser, Client, ROLE, Review } from "@prisma/client";

export class AdviserBuilder {
  adviser: Adviser;
  constructor(firstName: string) {
    this.adviser = new AdviserInstance(firstName);
  }
  setId(id: string) {
    this.adviser.id = id;
    return this;
  }
  setFirstName(firstName: string) {
    this.adviser.firstName = firstName;
    return this;
  }
  setLastName(lastName: string) {
    this.adviser.lastName = lastName;
    return this;
  }
  email(email: string) {
    this.adviser.email = email;
    return this;
  }
  setBio(bio: string) {
    this.adviser.bio = bio;
    return this;
  }
  setProfileImage(profileImage: string) {
    this.adviser.profileImage = profileImage;
    return this;
  }
  setSecondaryImages(secondaryImages: string[]) {
    this.adviser.secondaryImages = secondaryImages;
    return this;
  }

  build(): Adviser {
    return this.adviser;
  }
}

class AdviserInstance {
  firstName: string;
  id: string;
  lastName: string;
  slug: string;
  bio: string;
  email: string;
  profileImage: string;
  secondaryImages: string[];
  clients: Client[];
  role: ROLE;
  reviews: Review[];

  constructor(
    firstName: string = "John",
    lastName: string = "Smith",
    slug: string = `${firstName}-${lastName}`,
    // For ease of association with other builder classes
    id: string = slug,
    bio: string = "John Smith financial advice at your service",
    email: string = "jsmith@finadvice.com.au",
    profileImage: string = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    secondaryImages: string[] = [],
    clients: Client[] = [],
    role: ROLE = ROLE.ADVISER,
    reviews: Review[] = []
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.slug = slug;
    this.bio = bio;
    this.email = email;
    this.profileImage = profileImage;
    this.secondaryImages = secondaryImages;
    this.clients = clients;
    this.role = role;
    this.reviews = reviews;
  }
}
