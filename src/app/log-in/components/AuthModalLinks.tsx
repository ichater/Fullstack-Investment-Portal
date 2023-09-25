"use client";

import AuthModal from "@/app/components/authmodals/AuthModal";
import React from "react";

export default function AuthModalLinks() {
  return (
    <div className="login-fail-modal_wrapper">
      <span>Please</span> <AuthModal isLogIn={false} /> <span>or</span>{" "}
      <AuthModal isLogIn={true} />
    </div>
  );
}
