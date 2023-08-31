import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Checkbox } from "@mui/material";
import { useInvestmentFormContext } from "@/hooks";
import { ManagedInvestmentCategory } from "@/types";

export default function FundSearchDisplay() {
  const { investmentFormState, setInvestmentFormState } =
    useInvestmentFormContext();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvestmentFormState((state) => ({
      ...state,
      fundState: {
        ...state.fundState,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const handleChange = (event: SelectChangeEvent) => {
    setInvestmentFormState((state) => ({
      ...state,
      fundState: {
        ...state.fundState,
        category: event.target.value as ManagedInvestmentCategory,
      },
    }));
  };
  const { name, category, nabOwned } = investmentFormState.fundState;

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;

    setInvestmentFormState((state) => ({
      ...state,
      fundState: {
        ...state.fundState,
        nabOwned: checked === true ? true : "",
      },
    }));
  };

  return (
    <>
      <TextField
        className="investment-text-input"
        id="outlined-search"
        label="Fund Name"
        type="search"
        name="name"
        value={name}
        onChange={handleChangeInput}
      />

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">type</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={category}
          label="type"
          onChange={handleChange}
        >
          <MenuItem value={""}>
            <em>Select investment Type</em>
          </MenuItem>
          <MenuItem value={"fund"}>Managed Funds</MenuItem>
          <MenuItem value={"sma"}>SMA</MenuItem>
        </Select>
        <FormHelperText>Investment Type</FormHelperText>
      </FormControl>
      <FormControlLabel
        className="nab-owned-radio"
        value="nab-owned-radio"
        control={
          <Checkbox
            checked={nabOwned !== ""}
            onChange={(e) => handleCheckboxChange(e)}
          />
        }
        label="Nab Owned"
      />
    </>
  );
}
