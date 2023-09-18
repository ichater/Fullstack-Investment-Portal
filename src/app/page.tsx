import AdviserAuthContextProvider from "@/context/AdviserAuthContext";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <AdviserAuthContextProvider>
      <div className="main-page_wrapper">
        <h1 className="main-page_header">Advisor Link</h1>
        <div className="main-page-text_wrapper">
          <p>
            Welcome to advisor-link a hub for financial advisers and their
            clients to communicate, plan investment strategies and buy/sell
            investments.
          </p>
          <p>
            If you are an adviser then log in or sign up with your details, if
            you are a client then to sign up or log in you will need to have an
            account with one of our available advisers.
          </p>
          <p>
            Until you do log in you are welcome to browse our{" "}
            <Link href="./adviser-list" data-testid="adviser-link">
              Adviser list
            </Link>{" "}
            or our <Link href="./investments">Investment options</Link> to see
            what is available when you sign up with us.
          </p>
        </div>
      </div>
    </AdviserAuthContextProvider>
  );
}
