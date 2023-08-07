import React, { useRef } from "react";
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
import { useInvestmentContext } from "@/context/InvestmentDisplayContext";

export default function InvestmentSearchForm() {
  // console.log("InvestmentSearchForm render");

  const { formDisplay, setFormDisplay } = useInvestmentContext();

  const handleChange = (event: SelectChangeEvent) => {
    setFormDisplay(event.target.value as InvestmentType);
  };

  let shareName = useRef("");
  let asx = useRef("");

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
        {formDisplay === "shares" && (
          <ShareSearchDisplay shareName={shareName} asx={asx} />
        )}
        {formDisplay === "funds" && <FundSearchDisplay />}
        {!!formDisplay && <GenericSearchDisplay />}
      </div>
      {!!formDisplay && (
        <div className="investment-submit_wrapper">
          {" "}
          <InvestmentSubmitBtn shareName={shareName} asx={asx} />
        </div>
      )}
    </form>
  );
}
