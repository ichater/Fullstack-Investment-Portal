import { Prisma } from "@prisma/client";

export type ShareIncomingData = Prisma.ShareInAccountGetPayload<{
  include: {
    share: true;
  };
}>;

export type InvestmentIncomingData =
  Prisma.ManagedInvestmentInAccountGetPayload<{
    include: {
      managedInvestment: true;
    };
  }>;
