import {
  AdviserAuthContext,
  AdviserAuthState,
  AdviserDataParsed,
} from "@/types";

export class AdviserAuthContextBuilder {
  context: AdviserAuthContext;
  constructor() {
    this.context = new AdviserAuthContextInstance();
  }

  setAdviserData(data: AdviserDataParsed) {
    this.context.authState.data = data;
    return this;
  }

  setLoadingTrue() {
    this.context.authState = {
      data: null,
      loading: true,
      error: null,
    };
    return this;
  }

  setErrorState(error: string) {
    this.context.authState = {
      data: null,
      loading: false,
      error,
    };
    return this;
  }

  build(): AdviserAuthContext {
    return this.context;
  }
}

class AdviserAuthContextInstance {
  authState: AdviserAuthState;
  setAuthState: React.Dispatch<React.SetStateAction<AdviserAuthState>>;
  triggerFetchAuth: boolean = false;
  setTriggerFetchAuth: React.Dispatch<React.SetStateAction<boolean>>;

  constructor(
    authState: AdviserAuthState = {
      data: null,
      loading: false,
      error: null,
    },
    triggerFetchAuth: boolean = false
  ) {
    this.authState = authState;
    this.setAuthState = () => {};
    this.triggerFetchAuth = triggerFetchAuth;
    this.setTriggerFetchAuth = () => {};
  }
}
