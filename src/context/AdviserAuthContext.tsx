"use client";

import React, { ReactNode, createContext, useState, useEffect } from "react";
import {
  AdviserAuthState,
  AdviserIncomingDataFull,
  AdviserAuthContext as AuthType,
} from "@/types";
import { getCookie } from "cookies-next";
import axios from "axios";
import { useQueryString } from "@/hooks/useQueryString";
import { adviserDataParser } from "@/lib/utils/adviserDataParsers";

export const AdviserAuthContext = createContext<AuthType>({
  authState: {
    data: null,
    loading: false,
    error: null,
  },
  setAuthState: () => {},
  triggerFetchAuth: false,
  setTriggerFetchAuth: () => {},
});

export default function AdviserAuthContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { router } = useQueryString();
  const [authState, setAuthState] = useState<AdviserAuthState>({
    data: null,
    loading: false,
    error: null,
  });

  const [triggerFetchAuth, setTriggerFetchAuth] = useState(false);

  const fetchData = async () => {
    setAuthState({
      data: null,
      loading: true,
      error: null,
    });
    console.log("fetching data");
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
        data: adviserDataParser(
          response.data.adviser as AdviserIncomingDataFull
        ),
        loading: false,
        error: null,
      });
      return response;
    } catch (error: any) {
      console.log("error", error);
      setAuthState({
        data: null,
        loading: false,
        error: error.response.data.errorMessage,
      });
    }
  };

  useEffect(() => {
    fetchData();
    console.log(authState);
    router.refresh();
    setTriggerFetchAuth(false);
  }, [triggerFetchAuth]);

  return (
    <AdviserAuthContext.Provider
      value={{
        authState,
        setAuthState,
        triggerFetchAuth,
        setTriggerFetchAuth,
      }}
    >
      {children}
    </AdviserAuthContext.Provider>
  );
}
