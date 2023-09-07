import { AdviserAuthState } from "../adviser/return-data";

export type AdviserAuthContext = {
  authState: AdviserAuthState;
  setAuthState: React.Dispatch<React.SetStateAction<AdviserAuthState>>;
  fetchData: () => Promise<void>;
};
