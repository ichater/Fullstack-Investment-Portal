import { Prisma } from "@prisma/client";

export type ClientIncomingData = Prisma.ClientGetPayload<{
  include: {
    accounts: {
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
    };
  };
}>;
