"use client";

import React, { useState } from "react";

import { TieredFee } from "@/types";
import { accountFeeParser } from "@/lib/utils/accountFeeParser";
type Props = {
  totalValue: number;
  cashInInvestments: number;
};

export default function FeeDisplay({ totalValue, cashInInvestments }: Props) {
  const [displayFees, setDisplayFees] = useState<boolean>(false);
  const [tieredFees, setTieredFees] = useState<TieredFee>(
    accountFeeParser(totalValue)
  );

  const handleClick = () => setDisplayFees((display) => !display);
  const { tierOne, tierTwo, tierThree, total } = tieredFees;
  const transitionProps = displayFees ? { marginTop: "1rem", opacity: 1 } : {};

  return (
    <div className="fee-display_wrapper">
      <button onClick={handleClick} className="fee-display_togglebtn">
        {displayFees ? "hide fees" : "show Fees"}
        {displayFees ? "^" : "v"}
      </button>
      <div className="tiered-fees_wrapper">
        <div style={transitionProps} className="tiered-fees">
          <h2>Fees (tiered):</h2>
          <div className="tiered-fees_col">
            <div className="fee-param">
              <div>First $200000 </div>
              <div>(0.4%)</div>
            </div>
            <div className="fee-amount">${tierOne}</div>
          </div>
          <div className="tiered-fees_col">
            <div className="fee-param">
              $200000 - $300000 <div> (0.15%)</div>
            </div>
            <div className="fee-amount">${tierTwo}</div>
          </div>
          <div className="tiered-fees_col">
            <div className="fee-param">
              $500000 + <div>(0.03%)</div>
            </div>
            <div className="fee-amount">${tierThree}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
