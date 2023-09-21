import { AdviserDataParsed } from "@/types";

export type AdviserAuthState = {
  data: AdviserDataParsed | null;
  loading: boolean;
  error: string | null;
};
