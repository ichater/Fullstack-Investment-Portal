import React from "react";
import { PageState } from "@/types";
import { useInvestmentFormContext } from "@/hooks";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

export default function GenericSearchDisplay() {
  const { investmentFormState, setInvestmentFormState } =
    useInvestmentFormContext();

  const { perPage } = investmentFormState.pageData;

  const handleChange = (event: SelectChangeEvent) =>
    setInvestmentFormState((state) => ({
      ...state,
      pageData: {
        ...state.pageData,
        perPage: parseInt(event.target.value) as PageState,
      },
    }));

  return (
    <>
      {" "}
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="per_page_select">num</InputLabel>
        <Select
          labelId="per_page_select"
          id="demo-simple-select-helper"
          value={perPage.toString()}
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
