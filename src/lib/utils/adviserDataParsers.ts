import {
  AdviserReturnData,
  ClientReturnData,
  AccountReturnData,
} from "@/types";
import { Adviser, Account } from "@prisma/client";

export const accountDataParser = (account: any): AccountReturnData => {
  const { shares, managedInvestments } = account;
};

// export const clientDataParser = (data: any): ClientReturnData => {};

// export const adviserDataParser = (data: any): AdviserReturnData => {};

const account = {
  id: "10da61c4-da72-4ad1-8022-7b3a05cc046d",
  clientId: "4c339cee-e66e-4bb8-9a9c-101359d301fd",
  totalValue: 367800.51,
  cashAccount: 339800.51,
  adviserFee: "1.5",
  adviserFeeType: "PERCENTAGE",
  cashInShares: 16000,
  cashInInvestments: 14000,
  name: "first-account",
  slug: "first-account-moderate",
  investmentStrategy: "MODERATE",
  shares: [
    {
      accountId: "10da61c4-da72-4ad1-8022-7b3a05cc046d",
      shareId: "85875746-73ec-4e9a-856c-71a680dbc720",
      value: 2000,
    },
    {
      accountId: "10da61c4-da72-4ad1-8022-7b3a05cc046d",
      shareId: "9e61a9e6-f6cc-4770-90e2-3e3fffae0d98",
      value: 5000,
    },
    {
      accountId: "10da61c4-da72-4ad1-8022-7b3a05cc046d",
      shareId: "89a27c02-ab47-46ec-b652-7c2545f16222",
      value: 7000,
    },
    {
      accountId: "10da61c4-da72-4ad1-8022-7b3a05cc046d",
      shareId: "8711c530-2029-4ce7-8707-53f7392da2a0",
      value: 2000,
    },
  ],
  managedInvestments: [
    {
      accountId: "10da61c4-da72-4ad1-8022-7b3a05cc046d",
      investmentId: "63d98bf9-481a-4e6f-8fe6-5225ee1f85b1",
      value: 2000,
    },
    {
      accountId: "10da61c4-da72-4ad1-8022-7b3a05cc046d",
      investmentId: "359c5b32-9ffa-4498-ac5f-b64b7f501547",
      value: 5000,
    },
    {
      accountId: "10da61c4-da72-4ad1-8022-7b3a05cc046d",
      investmentId: "4f5acabb-0eb5-4c85-8e88-b632f9d88374",
      value: 7000,
    },
  ],
};
