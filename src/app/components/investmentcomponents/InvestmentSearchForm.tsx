import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ShareSearchDisplay from "./investment-search-form/ShareSearchDisplay";
import FundSearchDisplay from "./investment-search-form/FundSearchDisplay";
import GenericSearchDisplay from "./investment-search-form/GenericSearchDisplay";
import InvestmentSubmitBtn from "./investment-search-form/InvestmentSubmitBtn";
import { InvestmentType } from "@/types";
import { useInvestmentFormContext } from "@/context";

export default function InvestmentSearchForm() {
  console.log("Search form render");
  const { investmentFormState, setInvestmentFormState } =
    useInvestmentFormContext();

  const handleChange = (event: SelectChangeEvent) => {
    setInvestmentFormState((state) => ({
      ...state,
      investmentType: event.target.value as InvestmentType,
    }));
  };

  const { investmentType } = investmentFormState;

  return (
    <form className="investment-search_wrapper">
      <div
        className="investment-search_top"
        style={{ justifyContent: `${investmentType ? "space-between" : ""}` }}
      >
        {" "}
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">type</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={investmentType}
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
        {investmentType === "shares" && <ShareSearchDisplay />}
        {investmentType === "funds" && <FundSearchDisplay />}
        {!!investmentType && <GenericSearchDisplay />}
      </div>
      {!!investmentType && (
        <div className="investment-submit_wrapper">
          {" "}
          <InvestmentSubmitBtn />
        </div>
      )}
    </form>
  );
}
