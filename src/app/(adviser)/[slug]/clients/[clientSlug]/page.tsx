"use client";
import SubmitButton from "@/app/components/formcomponents/SubmitButton";
import React, { useState } from "react";

export default function page({
  params: { slug, clientSlug },
}: {
  params: { slug: string; clientSlug: string };
}) {
  const [displayState, setDisplayState] = useState<"profile" | "accounts">(
    "profile"
  );

  const handleClick = (setPage: "profile" | "accounts") => {
    setDisplayState(setPage);
  };
  return (
    <div className="adviser-homepage_wrapper">
      <div className="adviser-client_tabs">
        <SubmitButton
          text="Profile"
          height={3}
          width={7}
          onClick={() => handleClick("profile")}
        />
        <SubmitButton
          text="Accounts"
          height={3}
          width={9}
          onClick={() => handleClick("accounts")}
        />
      </div>
      {displayState === "profile" && <div> Profile </div>}
      {displayState === "accounts" && <div> Accounts </div>}
    </div>
  );
}
