"use client";
import React, { useState } from "react";
import ClientInformation from "./ClientInformation";
import ClientAccounts from "./ClientAccounts";
import { ACCESS } from "@prisma/client";
import { AccountReturnData, ClientView } from "@/types";
import Link from "next/link";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useAdviserAuthContext } from "@/hooks/useContextHooks";

export default function ClientMainDisplay({
  slug,
  clientSlug,
  firstName,
  lastName,
  email,
  bio,
  access,
  profileImage,
  parsedAccountInformation,
}: {
  slug: string;
  clientSlug: string;
  firstName: string;
  lastName: string;
  email: string;
  bio: string;
  access: ACCESS;
  profileImage: string;
  parsedAccountInformation: AccountReturnData[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const display = (searchParams?.get("view") as ClientView) || "profile";

  const [displayState, setDisplayState] = useState<ClientView>(display);

  const handleClick = (setPage: "profile" | "accounts") => {
    setDisplayState(setPage);
    router.push(pathname + `?view=${setPage}`);
  };

  const { authState } = useAdviserAuthContext();

  console.log("authstate from client:", authState);

  return (
    <>
      {" "}
      <div className="toggle-view_tabs">
        <Link className="adviser-tab_link" href={`/adviser/${slug}`}>
          <button className="adviser-tab">Adviser Profile</button>
        </Link>
        <button className="adviser-tab" onClick={() => handleClick("profile")}>
          Profile
        </button>
        <button className="adviser-tab" onClick={() => handleClick("accounts")}>
          Accounts
        </button>
      </div>
      {displayState === "profile" && (
        <ClientInformation
          firstName={firstName}
          lastName={lastName}
          email={email}
          profileImage={profileImage}
          access={access}
          bio={bio}
        />
      )}
      {displayState === "accounts" && (
        <ClientAccounts
          firstName={firstName}
          lastName={lastName}
          accounts={parsedAccountInformation}
          params={{ slug, clientSlug }}
        />
      )}
    </>
  );
}
