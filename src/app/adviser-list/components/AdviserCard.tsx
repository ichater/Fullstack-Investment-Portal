import { AdviserIncomingDataShallow } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  adviser: AdviserIncomingDataShallow;
};

export default function AdviserCard({ adviser }: Props) {
  return (
    <div className="advisor-card_wrapper">
      <div className="advisor-card-profile-name_wrapper">
        <Image
          className="profile-image"
          src={adviser.profileImage}
          alt="adviser profile"
          width={500}
          height={500}
        />
        <h3>
          {adviser.firstName} {adviser.lastName}
        </h3>
      </div>

      <div className="advisor-card_text">
        <p>{adviser.bio ? adviser.bio : "No bio written yet"}</p>
      </div>
      <div className="advisor-card-btn_wrapper">
        <Link href={`/advisers/${adviser.slug}`}>
          <button className="advisor-btn">View Page</button>
        </Link>
      </div>
    </div>
  );
}
