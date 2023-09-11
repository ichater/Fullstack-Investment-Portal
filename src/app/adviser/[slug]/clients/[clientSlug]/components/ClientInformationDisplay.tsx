import { ClientInfoEditState } from "@/types";
import React from "react";

export default function ClientInformationDisplay({
  email,
  bio,
  access,
}: ClientInfoEditState) {
  return (
    <>
      {" "}
      <p>
        Email: <span>{email}</span>{" "}
      </p>
      <p> Access: {access}</p>
      <h3>About</h3>
      <p>{bio}</p>
    </>
  );
}
