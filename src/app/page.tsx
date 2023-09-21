import AdviserAuthContextProvider from "@/context/AdviserAuthContext";
import Link from "next/link";
import React from "react";
import { cookies } from "next/headers";
import { fetchAdviserData } from "@/lib/api/fetchAdviserData";

async function getData(jwt: string) {
  return await fetchAdviserData(jwt);
}

export default async function page() {
  const cookie = cookies();
  const jwt = cookie.get("jwt");

  const data = !!jwt ? await getData(jwt.value) : null;

  return (
    <AdviserAuthContextProvider>
      <div className="main-page_wrapper">
        {data ? (
          <h1 className="main-page_header">
            Welcome back {data.firstName} {data.lastName}
          </h1>
        ) : (
          <h1 className="main-page_header">Advisor Link</h1>
        )}
        <div className="main-page-text_wrapper">
          <p>
            Welcome to advisor-link a hub for financial advisers and their
            clients to communicate, plan investment strategies and buy/sell
            investments.
          </p>
          {data ? (
            <>
              <p>
                Good to see you back here again, we hope you are finding our
                services easy to use and profitable for your buisiness
              </p>
              <p>
                Good to see you back here again, we hope you are finding our
                services easy to use and profitable for your buisiness
              </p>
            </>
          ) : (
            <>
              <p>
                If you are an adviser then log in or sign up with your details,
                if you are a client then to sign up or log in you will need to
                have an account with one of our available advisers.
              </p>{" "}
              <p>
                Until you do log in you are welcome to browse our{" "}
                <Link href="./adviser-list" data-testid="adviser-link">
                  Adviser list
                </Link>{" "}
                or our <Link href="./investments">Investment options</Link> to
                see what is available when you sign up with us.
              </p>
            </>
          )}
        </div>
      </div>
    </AdviserAuthContextProvider>
  );
}
