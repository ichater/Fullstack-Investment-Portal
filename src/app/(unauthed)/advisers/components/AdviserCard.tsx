import { Adviser } from "@prisma/client";
import Link from "next/link";
import React from "react";

type Props = {
  adviser: Adviser;
};

export default function AdviserCard({ adviser }: Props) {
  return (
    <div className="advisor-card_wrapper">
      <div className="advisor-card-profile-name_wrapper">
        <img className="profile-image" src={adviser.profileImage} />
        <h3>
          {adviser.firstName} {adviser.lastName}
        </h3>
      </div>

      <div className="advisor-card_text">
        <p>{adviser.bio}</p>
      </div>
      <div className="advisor-card-btn_wrapper">
        <Link href={`/advisers/${adviser.slug}`}>
          <button className="advisor-btn">View Page</button>
        </Link>
      </div>
    </div>
  );
}
