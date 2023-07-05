"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { ToggleState } from "../AuthModal";

type Props = {
  toggleState: ToggleState;
  setToggleState: Dispatch<SetStateAction<ToggleState>>;
};

export default function ClientAdviserToggle({
  toggleState,
  setToggleState,
}: Props) {
  const handleToggle = () =>
    setToggleState(toggleState === "adviser" ? "client" : "adviser");
  return (
    <div className="modal-toggle_group">
      <p>Adviser</p>
      <button
        onClick={handleToggle}
        className="modal-toggle"
        style={{
          display: "flex",
          justifyContent: `${
            toggleState === "adviser" ? "flex-start" : "flex-end"
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
