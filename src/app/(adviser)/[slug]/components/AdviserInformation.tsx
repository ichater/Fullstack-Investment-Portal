"use client";

import React, { useState } from "react";
import { AdvisorInfo } from "@/types";
import SubmitButton from "@/app/components/formcomponents/SubmitButton";
import AdviserInformationDisplay from "./AdviserInformationDisplay";
import AdvisorInformationEdit from "./AdvisorInformationEdit";

export default function AdviserInformation({
  firstName,
  lastName,
  profileImage,
  email,
  phone,
  bio,
  city,
}: AdvisorInfo) {
  const [editState, setEditState] = useState<boolean>(false);
  const [editFormState, setEditFormState] = useState<{
    email: string;
    phone: string;
    bio: string;
    city: string;
  }>({
    email,
    phone,
    bio,
    city,
  });

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setEditFormState((editFormState) => ({
      ...editFormState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleClick = () => {
    if (editState) {
      alert("api call will be here");
      setEditState(false);
    } else {
      setEditState(true);
    }
  };

  return (
    <div className="adviser-homepage-details_wrapper">
      <div className="adviser-homepage-details">
        {editState ? (
          <AdvisorInformationEdit
            firstName={firstName}
            lastName={lastName}
            profileImage={profileImage}
            email={editFormState.email}
            city={editFormState.city}
            phone={editFormState.phone}
            bio={editFormState.bio}
            handleChange={handleChange}
          />
        ) : (
          <AdviserInformationDisplay
            firstName={firstName}
            lastName={lastName}
            profileImage={profileImage}
            email={editFormState.email}
            city={editFormState.city}
            phone={editFormState.phone}
            bio={editFormState.bio}
          />
        )}
      </div>
      <div className="adviser-submit-btn_wrapper">
        <SubmitButton
          text={editState ? "Submit" : "Edit"}
          backgroundColor="rgba(57, 229, 235, 0.8)"
          height={3}
          width={7}
          onHover={{
            // border: "1px solid rgba(54, 172, 71, 0.2)",
            fontSize: 1.75,
            backgroundColor: "rgba(12, 121, 255, 0.8)",
          }}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
