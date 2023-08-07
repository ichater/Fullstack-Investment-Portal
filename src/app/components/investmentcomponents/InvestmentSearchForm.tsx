import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import GenericSearchDisplay from "./investment-search-form/GenericSearchDisplay";
import { InvestmentType } from "@/types";
import { useInvestmentContext } from "@/context/InvestmentDisplayContext";

export default function InvestmentSearchForm({
  children,
  ShareSearchDisplayMemo,
  FundSearchDisplayMemo,
}: {
  children: React.JSX.Element;
  ShareSearchDisplayMemo: React.JSX.Element;
  FundSearchDisplayMemo: React.JSX.Element;
}) {
  // console.log("InvestmentSearchForm render");

  const { formDisplay, setFormDisplay } = useInvestmentContext();

  const handleChange = (event: SelectChangeEvent) => {
    setFormDisplay(event.target.value as InvestmentType);
  };

  return (
    <form className="investment-search_wrapper">
      <div
        className="investment-search_top"
        style={{ justifyContent: `${formDisplay ? "space-between" : ""}` }}
      >
        {" "}
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">type</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={formDisplay}
            label="type"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>Select investment Type</em>
            </MenuItem>
            <MenuItem value={"shares"}>Shares</MenuItem>
            <MenuItem value={"funds"}>Managed Funds</MenuItem>
          </Select>
          <FormHelperText>Investment Type</FormHelperText>
        </FormControl>
        {formDisplay === "shares" && ShareSearchDisplayMemo}
        {formDisplay === "funds" && FundSearchDisplayMemo}
        {!!formDisplay && <GenericSearchDisplay />}
      </div>
      {!!formDisplay && (
        <div className="investment-submit_wrapper"> {children}</div>
      )}
    </form>
  );
}
