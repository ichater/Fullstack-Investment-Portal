import { tempAdviser, tempAdvisersClients } from "@/lib/tempdata/tempAdviser";
import { SlugProp, AdviserData } from "@/types";

import React from "react";

const getData = (slug: string) => {
  return tempAdviser.slug === slug && { tempAdviser, tempAdvisersClients };
};

export default async function page({ params: { slug } }: SlugProp) {
  const data = getData(slug);

  if (!data) {
    return <div>Nothing to see here</div>;
  }

  const { tempAdviser, tempAdvisersClients } = data;
  return <div>{tempAdviser.firstName} is sexy</div>;
}
