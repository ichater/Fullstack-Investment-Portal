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
  setEmail(email: string) {
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
  setPhone(phone: string) {
    this.adviser.phone = phone;
    return this;
  }
  setCompany(company: string) {
    this.adviser.company = company;
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
  phone: string;
  city: string;
  company: string;
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
    phone: string = "0425789076",
    company: string = "Trustworthy advisers",
    city: string = "Melbourne",
    bio: string = `${firstName} ${lastName} is a seasoned financial adviser with over 10 years of experience in the industry. He is dedicated to helping individuals and families achieve their financial goals through comprehensive financial planning and investment strategies. With a strong background in wealth management, retirement planning, and risk management, John provides personalized solutions tailored to each client's unique needs and aspirations. `,
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
    this.phone = phone;
    this.company = company;
    this.slug = slug;
    this.bio = bio;
    this.city = city;
    this.email = email;
    this.profileImage = profileImage;
    this.secondaryImages = secondaryImages;
    this.clients = clients;
    this.role = role;
    this.reviews = reviews;
  }
}
