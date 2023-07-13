"use client";

import React, { Dispatch, SetStateAction } from "react";
import { LoginState } from "@/types";

type Props = {
  loginState: LoginState;
  setLoginState: Dispatch<SetStateAction<LoginState>>;
};

export default function ClientAdviserToggle({
  loginState,
  setLoginState,
}: Props) {
  const handleToggle = () =>
    setLoginState(loginState === "adviser" ? "client" : "adviser");
  return (
    <div className="modal-toggle_group">
      <p>Adviser</p>
      <button
        onClick={handleToggle}
        className="modal-toggle"
        style={{
          display: "flex",
          justifyContent: `${
            loginState === "adviser" ? "flex-start" : "flex-end"
          }`,
          alignItems: "center",
        }}
      >
        <div className="modal-toggle_slider"></div>
      </button>
      <p>Client</p>
    </div>
  );
}
