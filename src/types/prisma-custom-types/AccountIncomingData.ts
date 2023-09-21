import { Prisma } from "@prisma/client";

export type AccountIncomingData = Prisma.AccountGetPayload<{
  include: {
    shares: {
      include: {
        share: true;
      };
    };
    managedInvestments: {
      include: {
        managedInvestment: true;
      };
    };
  };
}>;
