import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Checkbox } from "@mui/material";
import { ManagedInvestmentFormState } from "@/app/types";
import { InvestmentDisplayContext } from "@/context/InvestmentDisplayContext";
import { ManagedInvestmentCategory } from "@/app/types/investment-ui/managedinvestmenttype";

export default function FundSearchDisplay() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { setFundFormState, fundFormState } = useContext(
    InvestmentDisplayContext
  );

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFundFormState((fundFormState) => ({
      ...fundFormState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChange = (event: SelectChangeEvent) => {
    setFundFormState({
      ...fundFormState,
      category: event.target.value as ManagedInvestmentCategory,
    });
  };

  const { name, category } = fundFormState;

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
        value="end"
        control={
          <Checkbox
            checked={isChecked}
            onChange={() => {
              setFundFormState({
                ...fundFormState,
                nabOwned: isChecked === true ? true : "",
              });
              setIsChecked((isChecked) => !isChecked);
            }}
          />
        }
        label="Nab Owned"
      />
    </>
  );
}
