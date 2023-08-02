import React from "react";
import TextField from "@mui/material/TextField";
import { useInvestmentContext } from "@/context/InvestmentDisplayContext";

export default function ShareSearchDisplay() {
  const { shareFormState, setShareFormState } = useInvestmentContext();
  const { name, asx } = shareFormState;

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShareFormState((shareFormState) => ({
      ...shareFormState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {" "}
      <TextField
        className="investment-text-input"
        id="outlined-search"
        label="Share Name"
        type="search"
        name="name"
        onChange={handleChangeInput}
        value={name}
      />
      <TextField
        className="investment-text-input"
        id="outlined-search"
        label="ASX"
        type="search"
        name="asx"
        onChange={handleChangeInput}
        value={asx}
      />
    </>
  );
}
