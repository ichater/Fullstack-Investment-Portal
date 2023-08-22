import React from "react";
import TextField from "@mui/material/TextField";
import { useInvestmentFormContext } from "@/context";

export default function ShareSearchDisplay() {
  const { setShareFormState, shareFormState } = useInvestmentFormContext();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShareFormState((shareFormState) => ({
      ...shareFormState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className="investment-input_wrapper">
        <label className="investment-input_label">name</label>
        <TextField
          className="investment-text-input"
          id="outlined-search"
          type="search"
          name="name"
          onChange={handleChangeInput}
          value={shareFormState.name}
        />
      </div>
      <div className="investment-input_wrapper">
        <label className="investment-input_label">asx</label>
        <TextField
          className="investment-text-input"
          id="outlined-search"
          type="search"
          name="asx"
          onChange={handleChangeInput}
          value={shareFormState.asx}
        />
      </div>
    </>
  );
}
