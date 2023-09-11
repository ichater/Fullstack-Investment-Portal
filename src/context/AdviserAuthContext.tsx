"use client";

import React, { ReactNode, createContext, useState, useEffect } from "react";
import {
  AdviserAuthState,
  AdviserReturnData,
  AdviserAuthContext as AuthType,
} from "@/types";
import { getCookie } from "cookies-next";

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
    error: null,
  });

  const fetchData = async () => {
    const token = getCookie("jwt");

    if (!token) return;
    setAuthState({
      data: null,
      loading: true,
      error: null,
    });
    try {
      const response = await fetch("http://localhost:3000/api/auth/meadviser", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }).then((res) => res.json());
      console.log("data", response.adviser);
      setAuthState({
        data: response.adviser as AdviserReturnData,
        loading: false,
        error: null,
      });

      console.log("authstate from fetch", authState.data);
    } catch (error) {
      console.log("error", error);
      setAuthState({
        data: null,
        loading: false,
        error: "no response",
      });
    }
  };

  useEffect(() => {
    fetchData();
    console.log(authState);
  }, []);

  return (
    <AdviserAuthContext.Provider value={{ authState, setAuthState, fetchData }}>
      {children}
    </AdviserAuthContext.Provider>
  );
}
