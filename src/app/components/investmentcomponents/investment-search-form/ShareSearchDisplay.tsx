import React from "react";
import { TextField } from "@mui/material";
import { useInvestmentFormContext } from "@/hooks";

export default function ShareSearchDisplay() {
  const { investmentFormState, setInvestmentFormState } =
    useInvestmentFormContext();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvestmentFormState((state) => ({
      ...state,
      shareState: {
        ...state.shareState,
        [e.target.name]: e.target.value,
      },
    }));
  };
  const { name, asx } = investmentFormState.shareState;

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
          value={name}
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
          value={asx}
        />
      </div>
    </>
  );
}
