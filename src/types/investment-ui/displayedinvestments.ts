import { ManagedInvestment, Share } from "@prisma/client";

export interface DisplayedInvestments {
  investments: Share[][] | ManagedInvestment[][];
  error: string | null;
  loading: boolean;
}
