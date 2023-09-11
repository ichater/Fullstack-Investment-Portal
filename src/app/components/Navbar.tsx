"use client";

import React from "react";
import Link from "next/link";
import AuthModal from "./authmodals/AuthModal";
import Image from "next/image";

export default function Navbar() {
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
        <ul className="nav_links nav-text">
          <Link href="/">
            <li>Home</li>
          </Link>
          <AuthModal isLogIn={false} />
          <AuthModal isLogIn={true} />
        </ul>
      </nav>
      <Link href="./advisers">
        <button className="advisor-btn">Adviser List</button>
      </Link>
    </div>
  );
}
