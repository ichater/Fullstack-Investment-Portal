import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ShareSearchDisplay from "./investment-search-form/ShareSearchDisplay";
import FundSearchDisplay from "./investment-search-form/FundSearchDisplay";
import GenericSearchDisplay from "./investment-search-form/GenericSearchDisplay";
import InvestmentSubmitBtn from "./investment-search-form/InvestmentSubmitBtn";

export default function InvestmentSearchForm() {
  const [investmentType, setInvestmentType] = useState("");
  const [investmentsPerPage, setinvestmentsPerPage] = useState(50);

  const handleChange = (event: SelectChangeEvent) => {
    setInvestmentType(event.target.value);
  };
  return (
    <div className="investment-search_wrapper">
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
        {investmentType === "shares" && (
          <>
            <ShareSearchDisplay />
            <GenericSearchDisplay
              investmentsPerPage={investmentsPerPage}
              setinvestmentsPerPage={setinvestmentsPerPage}
            />
          </>
        )}
        {investmentType === "funds" && (
          <>
            {" "}
            <FundSearchDisplay />
            <GenericSearchDisplay
              investmentsPerPage={investmentsPerPage}
              setinvestmentsPerPage={setinvestmentsPerPage}
            />
          </>
        )}
      </div>
      {investmentType && (
        <div className="investment-submit_wrapper">
          {" "}
          <InvestmentSubmitBtn />{" "}
        </div>
      )}
    </div>
  );
}
