import { AdvisorInfo } from "@/types/adviser";
import Image from "next/image";
import React from "react";

export default function AdviserInformationDisplay({
  firstName,
  lastName,
  profileImage,
  email,
  phone,
  bio,
  city,
}: AdvisorInfo) {
  return (
    <>
      <div className="adviser-img-wrapper">
        <Image
          className="adviser-profile-img"
          src={profileImage}
          alt="adviser profile image"
          height={500}
          width={500}
        />
      </div>
      <div className="profile-details-wrapper">
        <h2>{firstName + " " + lastName}</h2>
        <p>
          Email: <span>{email}</span>{" "}
        </p>
        <p>
          City:<span> {city} </span>
        </p>
        <p>
          Phone: <span>{phone} </span>
        </p>
        <h3>About</h3>
        <p>{bio}</p>
      </div>
    </>
  );
}
