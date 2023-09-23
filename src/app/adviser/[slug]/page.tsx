import React from "react";
import { SlugProp } from "@/types";
import MainDisplay from "./components/MainDisplay";
import { fetchAdviserData } from "@/lib/api/fetchAdviserData";
import { cookies } from "next/headers";

async function getData(jwt: string) {
  return await fetchAdviserData(jwt);
}
export default async function page({ params: { slug } }: SlugProp) {
  const cookie = cookies();
  const jwt = cookie.get("jwt");

  if (!jwt) {
    return <div>No auth detected</div>;
  }

  const data = await getData(jwt.value);

  if (!data) {
    return <div>Nothing to see here</div>;
  }

  if (data.slug !== slug) {
    return <div>Incorrect credentials</div>;
  }

  return (
    <>
      <MainDisplay {...data} />
    </>
  );
}
