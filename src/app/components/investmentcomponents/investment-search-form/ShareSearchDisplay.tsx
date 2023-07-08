import React from "react";
import TextField from "@mui/material/TextField";
import { ShareFormState } from "@/app/types";

type Props = {
  setShareFormState: React.Dispatch<React.SetStateAction<ShareFormState>>;
};

export default function ShareSearchDisplay({ setShareFormState }: Props) {
  return (
    <>
      {" "}
      <TextField
        className="investment-text-input"
        id="outlined-search"
        label="Share Name"
        type="search"
      />
      <TextField
        className="investment-text-input"
        id="outlined-search"
        label="ASX"
        type="search"
      />
    </>
  );
}
