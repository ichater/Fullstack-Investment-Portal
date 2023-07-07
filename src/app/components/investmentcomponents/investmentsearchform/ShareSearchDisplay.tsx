import React from "react";
import TextField from "@mui/material/TextField";

export default function ShareSearchDisplay() {
  return (
    <>
      {" "}
      <TextField
        className="investment-text-input"
        id="outlined-search"
        label="Share Name"
        type="search"
      />
      <TextField
        className="investment-text-input"
        id="outlined-search"
        label="ASX"
        type="search"
      />
    </>
  );
}
