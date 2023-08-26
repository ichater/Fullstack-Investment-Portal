/* istanbul ignore file */
import { ManagedInvestmentBuilder, ShareBuilder } from "@/lib/builders";
import { DisplayFund } from "@/types";

export const mockManagedInvestment = new ManagedInvestmentBuilder(
  "test-investment"
)
  .setApir("abc123")
  .setNabOwned(true)
  .setCategory("FUND")
  .build();

export const mockShare = new ShareBuilder("The-Share")
  .setasxCode("CLA")
  .setCategory("highly profitable")
  .build();

export const mockInvestmentResult: DisplayFund[] = [
  {
    id: "359c5b32-9ffa-4498-ac5f-b64b7f501547",
    name: "SMA Antares ex 20",
    apir: "NUN0102AU",
    nabOwned: true,
    mer: 0.75,
    category: "SMA",
  },
  {
    id: "693db439-867a-4b2e-96c5-7547228f07bc",
    name: "SMA Blue Chip Top 20",
    apir: "NUN0051AU",
    nabOwned: true,
    mer: 0.21,
    category: "SMA",
  },
  {
    id: "8f0a067b-3a5f-439f-8da5-54a97a552237",
    name: "SMA JBWere Income",
    apir: "JPL0001AU",
    nabOwned: true,
    mer: 0.55,
    category: "SMA",
  },
  {
    id: "4e147053-12b9-427a-b7c1-d2c49dc030a5",
    name: "SMA JBWere Listed Fixed Income",
    apir: "JPL0003AU",
    nabOwned: true,
    mer: 0.55,
    category: "SMA",
  },
  {
    id: "957bba71-9186-457e-aa8e-3a873b12fa3a",
    name: "SMA Redpoint Industrials",
    apir: "NUN0101AU",
    nabOwned: true,
    mer: 0.4,
    category: "SMA",
  },
  {
    id: "c01e2420-d353-45d0-b17e-449dc5ab2bc5",
    name: "SMA PIC Lifecycle Income Conservative",
    apir: "NUN6236AU",
    nabOwned: true,
    mer: 0.305,
    category: "SMA",
  },
  {
    id: "ddced6be-2c9e-4fa9-9d35-bb9275ff8ec6",
    name: "SMA PIC Lifecycle Income Moderate",
    apir: "NUN9829AU",
    nabOwned: true,
    mer: 0.305,
    category: "SMA",
  },
  {
    id: "399117dd-1e26-4b47-8724-8b5afc589172",
    name: "SMA PIC Lifecycle Income Assertive",
    apir: "NUN8576AU",
    nabOwned: true,
    mer: 0.305,
    category: "SMA",
  },
  {
    id: "8e147ec4-c8cd-480f-b06a-c376c7756ddd",
    name: "SMA PIC Lifecycle Growth Moderate",
    apir: "NUN3814AU",
    nabOwned: true,
    mer: 0.305,
    category: "SMA",
  },
  {
    id: "ac490ab3-77de-4813-b618-ffd883ddf813",
    name: "SMA PIC Lifecycle Growth Assertive",
    apir: "NUN5133AU",
    nabOwned: true,
    mer: 0.305,
    category: "SMA",
  },
  {
    id: "0f22d73c-eeea-4161-964b-284b8732d1b7",
    name: "SMA PIC Lifecycle Growth Aggressive",
    apir: "NUN2679AU",
    nabOwned: true,
    mer: 0.305,
    category: "SMA",
  },
];
