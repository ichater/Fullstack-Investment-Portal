import { BasicClientInformation, ClientInfoEditState } from "@/types";
import React, { useState } from "react";
import ClientInformationDisplay from "./ClientInformationDisplay";
import ClientInformationEdit from "./ClientInformationEdit";
import SubmitButton from "@/app/components/formcomponents/SubmitButton";
import Image from "next/image";

export default function ClientInformation({
  firstName,
  lastName,
  email,
  bio,
  access,
  profileImage,
}: BasicClientInformation) {
  const [editState, setEditState] = useState<boolean>(false);
  const [editFormState, setEditFormState] = useState<ClientInfoEditState>({
    email,
    bio,
    access,
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
      setEditState(false);
    } else {
      setEditState(true);
    }
  };
  return (
    <div>
      <div className="adviser-homepage-details">
        <div className="adviser-img-wrapper">
          <Image
            className="adviser-profile-img"
            src={profileImage}
            alt="Profile Image"
            width={500}
            height={500}
          />
        </div>
        <div className="profile-details-wrapper">
          <h2>{firstName + " " + lastName}</h2>
          {!editState ? (
            <ClientInformationDisplay
              email={editFormState.email}
              access={editFormState.access}
              bio={editFormState.bio}
            />
          ) : (
            <ClientInformationEdit
              email={editFormState.email}
              access={editFormState.access}
              bio={editFormState.bio}
              handleChange={handleChange}
              setEditFormState={setEditFormState}
            />
          )}
        </div>
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
