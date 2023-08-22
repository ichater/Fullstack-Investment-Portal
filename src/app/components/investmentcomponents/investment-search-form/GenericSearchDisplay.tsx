import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { PageState } from "@/types";
import { useInvestmentFormContext } from "@/context";

export default function GenericSearchDisplay() {
  const { setPageState, pageState } = useInvestmentFormContext();

  const handleChange = (event: SelectChangeEvent) =>
    setPageState(parseInt(event.target.value) as PageState);

  return (
    <>
      {" "}
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">num</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={pageState.toString()}
          label="type"
          onChange={handleChange}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
        <FormHelperText>per page</FormHelperText>
      </FormControl>
    </>
  );
}
