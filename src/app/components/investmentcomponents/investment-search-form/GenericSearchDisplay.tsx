import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type Props = {
  setinvestmentsPerPage: React.Dispatch<React.SetStateAction<number>>;
  investmentsPerPage: number;
};

export default function GenericSearchDisplay({
  setinvestmentsPerPage,
  investmentsPerPage,
}: Props) {
  const handleChange = (event: SelectChangeEvent) =>
    setinvestmentsPerPage(parseInt(event.target.value));
  return (
    <>
      {" "}
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">per page</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={investmentsPerPage.toString()}
          label="type"
          onChange={handleChange}
        >
          <MenuItem value={0}>
            <em>investments per page</em>
          </MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
        <FormHelperText>Investment Type</FormHelperText>
      </FormControl>
    </>
  );
}
