import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { useSearchParams } from "next/navigation";
import { ShareFormState } from "@/types";

export default function ShareSearchDisplay({
  shareName,
  asx,
}: {
  shareName: React.MutableRefObject<string>;
  asx: React.MutableRefObject<string>;
}) {
  console.log("share form rendered");
  const [formState, setFormState] = useState<ShareFormState>({
    name: "",
    asx: "",
  });

  const searchParams = useSearchParams();
  const searchParamsObj = {
    investmentType: searchParams?.get("investment-type"),
    shareParams: {
      name: searchParams?.get("name"),
      asx: searchParams?.get("asx"),
    },
  };
  const { shareParams } = searchParamsObj;
  const shareParamState: ShareFormState = {
    name: !!shareParams.name ? shareParams.name : "",
    asx: !!shareParams.asx ? shareParams.asx : "",
  };

  useEffect(() => {
    if (searchParamsObj.investmentType === "shares") {
      setFormState({
        name: shareParamState.name,
        asx: shareParamState.asx,
      });
    }
  }, []);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));

    shareName.current = formState.name;
    asx.current = formState.asx;
  };

  return (
    <>
      <div className="investment-input_wrapper">
        <label className="investment-input_label">name</label>
        <TextField
          className="investment-text-input"
          id="outlined-search"
          type="search"
          name="name"
          onChange={handleChangeInput}
          value={formState.name}
        />
      </div>
      <div className="investment-input_wrapper">
        <label className="investment-input_label">asx</label>
        <TextField
          className="investment-text-input"
          id="outlined-search"
          type="search"
          name="asx"
          onChange={handleChangeInput}
          value={formState.asx}
        />
      </div>
    </>
  );
}
