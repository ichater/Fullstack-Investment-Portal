import { Prisma } from "@prisma/client";

export type AdviserIncomingDataFull = Prisma.AdviserGetPayload<{
  include: {
    clients: {
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
    };
  };
}>;

export type AdviserIncomingDataShallow = Prisma.AdviserGetPayload<{
  select: {
    id: true;
    firstName: true;
    lastName: true;
    slug: true;
    bio: true;
    email: true;
    city: true;
    phone: true;
    company: true;
    profileImage: true;
  };
}>;
