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
        ) : (
          <ul className="nav_links nav-text">
            <Link href={`/adviser/${authState.data.slug}`}>
              <li>Profile</li>
            </Link>
            <Link href={`/adviser/${authState.data.slug}`}>
              <li>Clients</li>
            </Link>
            <Link href="./investments">
              <li>Investment Options</li>
            </Link>
          </ul>
        )}
      </nav>

      {authState.data ? (
        <>
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
