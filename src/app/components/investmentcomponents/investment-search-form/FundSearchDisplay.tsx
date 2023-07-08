import React from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";

import Select from "@mui/material/Select";
import { Checkbox } from "@mui/material";
import { ManagedInvestmentFormState } from "@/app/types";

type Props = {
  setFundFormState: React.Dispatch<
    React.SetStateAction<ManagedInvestmentFormState>
  >;
};

export default function FundSearchDisplay({ setFundFormState }: Props) {
  return (
    <>
      <TextField
        className="investment-text-input"
        id="outlined-search"
        label="Fund Name"
        type="search"
      />

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">type</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="type"
        >
          <MenuItem value="">
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
        control={<Checkbox />}
        label="Nab Owned"
      />
    </>
  );
}
