import SubmitButton from "@/app/components/formcomponents/SubmitButton";
import { tempAdviser, tempAdvisersClients } from "@/lib/tempdata/tempAdviser";
import { SlugProp, AdviserData } from "@/types";

import React from "react";
import AdviserInformation from "./components/AdviserInformation";

const getData = (slug: string) => {
  return tempAdviser.slug === slug && { tempAdviser, tempAdvisersClients };
};

export default async function page({ params: { slug } }: SlugProp) {
  const data = getData(slug);

  if (!data) {
    return <div>Nothing to see here</div>;
  }

  const { tempAdviser, tempAdvisersClients } = data;
  const { firstName, lastName, profileImage, email, city, phone, bio } =
    tempAdviser;
  return (
    <div className="adviser-homepage_wrapper">
      <div className="adviser-client_tabs">
        <SubmitButton text="Profile" height={3} width={7} />
        <SubmitButton text="Clients" height={3} width={7} />
      </div>

      <AdviserInformation
        firstName={firstName}
        lastName={lastName}
        profileImage={profileImage}
        email={email}
        city={city}
        phone={phone}
        bio={bio}
      />
    </div>
  );
}
