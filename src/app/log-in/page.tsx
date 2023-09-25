import React from "react";
import ModalError from "../components/errorcomponents/ModalError";
import AuthModalLinks from "./components/AuthModalLinks";

export default function page() {
  return (
    <div className="main-page_wrapper">
      <ModalError
        title={"Invalid credentials"}
        message={
          "Oops! Looks like you're trying to access a page without the correct credentials! Please log in or sign up!"
        }
      />
      <div className="login-fail_wrapper">
        <AuthModalLinks />
      </div>
    </div>
  );
}
