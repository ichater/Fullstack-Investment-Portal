import Link from "next/link";
import React from "react";

type Props = {
  firstName: string;
  lastName: string;
  slug: string;
  email: string;
  profileImage: string;
  mainSlug: string;
};

export default function ClientCard({
  firstName,
  lastName,
  slug,
  email,
  profileImage,
  mainSlug,
}: Props) {
  return (
    <Link href={`/${mainSlug}/${slug}`} className="next-link_No_Decoration">
      <div className="client-card_wrapper">
        <div className="client-img_wrapper">
          <img className="adviser-profile-img" src={profileImage} />
        </div>
        <div className="client-information_wrapper">
          <h2 className="client-name">{firstName + " " + lastName}</h2>
          <p>{email}</p>
        </div>
      </div>
    </Link>
  );
}
