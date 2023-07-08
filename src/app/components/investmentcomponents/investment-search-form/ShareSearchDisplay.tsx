import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import { ShareFormState } from "@/app/types";
import { InvestmentDisplayContext } from "@/context/InvestmentDisplayContext";

export default function ShareSearchDisplay() {
  const { setShareFormState } = useContext(InvestmentDisplayContext);
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
