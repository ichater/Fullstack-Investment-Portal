import { Prisma } from "@prisma/client";

export type AccountIncomingData = Prisma.AccountGetPayload<{
  include: {
    shares: true;
    managedInvestments: true;
  };
}>;
