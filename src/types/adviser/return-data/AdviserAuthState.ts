import { AdviserReturnData } from "@/types";

export type AdviserAuthState = {
  data: AdviserReturnData | null;
  loading: boolean;
  error: string | null;
};
