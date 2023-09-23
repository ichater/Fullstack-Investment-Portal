import React from "react";
import { fetchClientByAdvisor } from "@/lib/api/fetchAdviserData";
import { cookies } from "next/headers";
import ClientMainDisplay from "./components/ClientMainDisplay";

async function getData(jwt: string, clientSlug: string) {
  return await fetchClientByAdvisor(jwt, clientSlug);
}
export default async function page({
  params: { slug, clientSlug },
}: {
  params: { slug: string; clientSlug: string };
}) {
  const cookie = cookies();
  const jwt = cookie.get("jwt");
  if (!jwt) {
    return <div>No auth detected</div>;
  }

  const data = await getData(jwt.value, clientSlug);

  if (!data || !data.client) {
    return <div>No data found</div>;
  }

  return (
    <div className="adviser-homepage_wrapper">
      <ClientMainDisplay advisorSlug={slug} {...data.client} />
    </div>
  );
}
