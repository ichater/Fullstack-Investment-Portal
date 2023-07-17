import React, { useState } from "react";
import { AdvisorInfo } from "@/types";

interface Props extends AdvisorInfo {
  handleChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

export default function AdvisorInformationEdit({
  firstName,
  lastName,
  profileImage,
  email,
  phone,
  bio,
  city,
  handleChange,
}: Props) {
  return (
    <>
      {" "}
      <div className="adviser-img-wrapper">
        <img className="adviser-profile-img" src={profileImage} />
      </div>
      <div className="adviser-details-wrapper">
        <h2>{firstName + " " + lastName}</h2>
        <div>
          <label>Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />{" "}
        </div>
        <div>
          {" "}
          <label>City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={handleChange}
          />{" "}
        </div>
        <div>
          {" "}
          <label>Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={handleChange}
          />{" "}
        </div>
        <h3>About</h3>
        <textarea
          className="adviser-bio-edit"
          id="bio"
          name="bio"
          rows={5}
          cols={80}
          value={bio}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
