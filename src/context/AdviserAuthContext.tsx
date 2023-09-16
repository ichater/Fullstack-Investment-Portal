"use client";

import React, { ReactNode, createContext, useState, useEffect } from "react";
import {
  AdviserAuthState,
  AdviserReturnData,
  AdviserAuthContext as AuthType,
} from "@/types";
import { getCookie } from "cookies-next";
import axios from "axios";
import { useAdviserAuth } from "@/hooks/useAdviserAuth";

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

  const { handleAdviserSignUp, handleAdviserSignIn, handleAdviserSignOut } =
    useAdviserAuth();

  const fetchData = async () => {
    setAuthState({
      data: null,
      loading: true,
      error: null,
    });
    try {
      const jwt = getCookie("jwt");

      if (!jwt) {
        return setAuthState({
          data: null,
          error: null,
          loading: false,
        });
      }
      const response = await axios.get(
        "http://localhost:3000/api/auth/meadviser",
        {
          headers: {
            authorization: `Bearer ${jwt}`,
          },
        }
      );
      console.log("response", response.data.adviser);
      axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;

      setAuthState({
        data: response.data as AdviserReturnData,
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
