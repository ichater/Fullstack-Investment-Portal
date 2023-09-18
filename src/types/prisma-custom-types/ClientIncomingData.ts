import { Prisma } from "@prisma/client";

export type ClientIncomingData = Prisma.ClientGetPayload<{
  include: {
    accounts: {
      include: {
        shares: true;
        managedInvestments: true;
      };
    };
  };
}>;
