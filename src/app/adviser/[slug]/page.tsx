import React from "react";
import { SlugProp } from "@/types";
import { tempAdviser, tempAdvisersClients } from "@/lib/tempdata/tempAdviser";
import MainDisplay from "./components/MainDisplay";

const getData = (slug: string) => {
  return (
    tempAdviser.slug === slug && {
      tempAdviser,
      clientData: tempAdvisersClients,
    }
  );
};

export default function page({ params: { slug } }: SlugProp) {
  const data = getData(slug);

  if (!data) {
    return <div>Nothing to see here</div>;
  }

  const { tempAdviser, clientData } = data;
  const { firstName, lastName, profileImage, email, city, phone, bio } =
    tempAdviser;

  const clients = clientData.map((client) => ({
    firstName: client.firstName,
    lastName: client.lastName,
    clientSlug: client.slug,
    email: client.email,
    profileImage: client.profileImage,
    slug: slug,
    bio: client.bio,
    id: client.id,
  }));
  return (
    <>
      <MainDisplay
        firstName={firstName}
        lastName={lastName}
        profileImage={profileImage}
        email={email}
        city={city}
        phone={phone}
        bio={bio}
        clients={clients}
      />
    </>
  );
}
