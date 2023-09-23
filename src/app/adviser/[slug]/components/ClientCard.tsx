import { AdvisorClientDisplay } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = AdvisorClientDisplay;

export default function ClientCard({
  firstName,
  lastName,
  email,
  profileImage,
  advisorSlug,
  clientSlug,
  bio,
}: Props) {
  return (
    <Link
      href={`/adviser/${advisorSlug}/clients/${clientSlug}?view=profile`}
      passHref
      legacyBehavior
      className="next-link_No_Decoration"
    >
      <div className="client-card_wrapper">
        <div className="client-img_wrapper">
          <Image
            className="adviser-profile-img"
            src={profileImage}
            alt="client profile"
            height={500}
            width={500}
          />
        </div>
        <div className="client-information_wrapper">
          <h2 className="client-name">{firstName + " " + lastName}</h2>
          <p>{email}</p>
        </div>
        <div className="client-information_wrapper">
          <p>{bio}</p>
        </div>
      </div>
    </Link>
  );
}
