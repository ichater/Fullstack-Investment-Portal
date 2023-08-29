import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import AccountTables from "../components/AccountTables";
import { AccountValueBuilder } from "@/lib/builders/AccountValuesBuilder";
import { tempFunds, tempSMAs, tempShares } from "@/lib/tempdata";

describe("Client Account Table", () => {
  describe("Cash Account", () => {
    it("renders the correct cash value in the account", () => {
      const accountValue = new AccountValueBuilder(1234.56)
        .setCashAccountValue(1234.56)
        .build();
      render(<AccountTables accountValues={accountValue} />);

      expect(screen.getByText("$1234.56")).toBeInTheDocument();
    });
  });
  describe("Share display", () => {
    it("renders shares in table as title if there is share data", () => {
      const accountValue = new AccountValueBuilder(1000)
        .setShares(tempShares)
        .build();
      render(<AccountTables accountValues={accountValue} />);
      expect(screen.getByText("Shares:")).toBeInTheDocument();
    });
    it("does not renders shares in table as title if there is no share data", () => {
      const accountValue = new AccountValueBuilder(1000).setShares([]).build();
      render(<AccountTables accountValues={accountValue} />);

      expect(screen.queryByText("Shares:")).toBeNull();
    });
  });

  describe("Fund display", () => {
    it("renders funds in table as title if there is fund data", () => {
      const accountValue = new AccountValueBuilder(1000)
        .setFunds(tempFunds)
        .build();
      render(<AccountTables accountValues={accountValue} />);
      expect(screen.getByText("Managed Funds:")).toBeInTheDocument();
    });
    it("does not renders funds in table as title if there is no fund data", () => {
      const accountValue = new AccountValueBuilder(1000).setFunds([]).build();
      render(<AccountTables accountValues={accountValue} />);
      expect(screen.queryByText("Managed Funds:")).toBeNull();
    });
  });

  describe("SMA display", () => {
    it("renders SMA in table as title if there is fund data", () => {
      const accountValue = new AccountValueBuilder(1000)
        .setSma(tempSMAs)
        .build();
      render(<AccountTables accountValues={accountValue} />);
      expect(
        screen.getByText("Seperately Managed Accounts:")
      ).toBeInTheDocument();
    });
    it("does not renders funds in table as title if there is no fund data", () => {
      const accountValue = new AccountValueBuilder(1000).setSma([]).build();
      render(<AccountTables accountValues={accountValue} />);
      expect(screen.queryByText("Seperately Managed Accounts:")).toBeNull();
    });
  });
});
