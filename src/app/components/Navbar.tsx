import Link from "next/link";
import React from "react";
import AuthModal from "./AuthModal";

export default function Navbar() {
  return (
    <div className="navbar_wrapper">
      <img className="logo" src="images/dollar_sign_icon.svg" alt="logo" />
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
        <button className="nav-btn nav-text">Adviser List</button>
      </Link>
    </div>
  );
}
