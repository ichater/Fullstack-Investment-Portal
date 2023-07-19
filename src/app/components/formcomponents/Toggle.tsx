"use client";

import React, { Dispatch, SetStateAction } from "react";

type Props = {
  optionOne: string;
  optionTwo: string;
  toggleState: boolean;
  setToggleState: Dispatch<SetStateAction<boolean>>;
};

export default function ClientAdviserToggle({
  optionOne,
  optionTwo,
  toggleState,
  setToggleState,
}: Props) {
  return (
    <div className="modal-toggle_group">
      <p>{optionOne}</p>
      <button
        onClick={() => setToggleState((toggleState) => !toggleState)}
        className="modal-toggle"
        style={{
          display: "flex",
          justifyContent: `${toggleState ? "flex-start" : "flex-end"}`,
          //   alignItems: "center",
        }}
      >
        <div className="modal-toggle_slider"></div>
      </button>
      <p>{optionTwo}</p>
    </div>
  );
}
