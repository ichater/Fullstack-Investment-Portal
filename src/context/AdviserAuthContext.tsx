import React, { ReactNode, createContext, useState, useEffect } from "react";
import { AdviserAuthState, AdviserAuthContext as AuthType } from "@/types";

export const AdviserAuthContext = createContext<AuthType>({
  authState: {
    data: null,
    loading: false,
    error: null,
  },
  setAuthState: () => {},
  fetchData: async () => {},
});

export default function AdviserAuthContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [authState, setAuthState] = useState<AdviserAuthState>({
    data: null,
    loading: false,
    error: "null yo",
  });

  const fetchData = async () => {};

  useEffect(() => {
    console.log("authContext firing!");
  }, []);

  return (
    <AdviserAuthContext.Provider value={{ authState, setAuthState, fetchData }}>
      {children}
    </AdviserAuthContext.Provider>
  );
}
