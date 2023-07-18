import { SlugProp } from "@/types/nextjs";
import React from "react";

export default function page({
  params: { clientSlug },
}: {
  params: {
    clientSlug: string;
  };
}) {
  return <div>{clientSlug}</div>;
}
