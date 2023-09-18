import { Prisma } from "@prisma/client";

export type AdviserIncomingData = Prisma.AdviserGetPayload<{
  include: {
    clients: {
      include: {
        accounts: {
          include: {
            shares: true;
            managedInvestments: true;
          };
        };
      };
    };
  };
}>;
