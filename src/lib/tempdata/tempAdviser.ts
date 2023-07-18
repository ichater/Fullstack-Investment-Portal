import { AdviserBuilder, ClientBuilder, AccountBuilder } from "@/builders";
import { Account, Adviser, Client } from "@prisma/client";

export const tempAdviser: Adviser = new AdviserBuilder("Claire")
  .setId("tempAdviserId")
  .setLastName("Ruming")
  .setEmail("crum@gmail.com")
  .setSlug("claire-ruming")
  .setBio(
    "Not really sure what I am doing here since I am a nurse by trade, I will be very honest about what I do and do not know with you. Look you honestly shouldn't come to me for financial advice since its not my area of expertise. But if you want to have a cuppa and a chat then I am 100% your gal."
  )
  .build();

export const tempAdvisersClients: Client[] = [
  new ClientBuilder("Sallie")
    .setAccess("READWRITE")
    .setAviserId("tempAdviserId")
    .setBio(
      "Claire seems like a trustworthy and lovely lady, she sayd I shouldnt hire her to manage my retirement fund since she is a burse and not an advisor but I think she is under selling herself. With any luck my investment options pay off and I can pay for my nephew Brians drug habit"
    )
    .build(),
  new ClientBuilder("John").setAviserId("tempAdviserId").build(),
  new ClientBuilder("Brian").setAviserId("tempAdviserId").build(),
];

export const sallieAccountsTemp: Account[] = [
  new AccountBuilder("sallie-doe")
    .setValue(123450.0)
    .setInvestmentStraqtegy("ACTIVE")
    .build(),

  new AccountBuilder("sallie-doe")
    .setValue(373450.0)
    .setInvestmentStraqtegy("MODERATE")
    .build(),
];
