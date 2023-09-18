"use client";

import React from "react";
import Link from "next/link";
import AuthModal from "./authmodals/AuthModal";
import Image from "next/image";
import { useAdviserAuthContext } from "@/hooks";
import { useAdviserAuth } from "@/hooks/useAdviserAuth";

export default function Navbar() {
  const { authState } = useAdviserAuthContext();
  const { handleAdviserSignOut } = useAdviserAuth();
  return (
    <div className="navbar_wrapper">
      <Image
        className="logo"
        src="images/dollar_sign_icon.svg"
        alt="logo"
        width={500}
        height={500}
      />
      <nav>
        {!authState.data ? (
          <ul className="nav_links nav-text">
            <Link href="/">
              <li>Home</li>
            </Link>
            <AuthModal isLogIn={false} />
            <AuthModal isLogIn={true} />
          </ul>
        ) : null}
      </nav>
      {authState.data ? (
        <h2 className="navbar-authed_header">
          Welcome {authState.data.firstName} {authState.data.lastName}
        </h2>
      ) : null}
      {authState.data ? (
        <>
          <Link href={`/adviser/${authState.data.slug}`}>
            <button className="advisor-btn">Profile</button>
          </Link>
          <button
            className="advisor-btn"
            onClick={() => handleAdviserSignOut()}
          >
            Log Out
          </button>
        </>
      ) : null}
      {!authState.data && (
        <Link href="./advisers">
          <button className="advisor-btn">Adviser List</button>
        </Link>
      )}
    </div>
  );
}
