import { AdviserAuthState } from "../adviser/return-data";

export type AdviserAuthContext = {
  authState: AdviserAuthState;
  setAuthState: React.Dispatch<React.SetStateAction<AdviserAuthState>>;
  triggerFetchAuth: boolean;
  setTriggerFetchAuth: React.Dispatch<React.SetStateAction<boolean>>;
};
