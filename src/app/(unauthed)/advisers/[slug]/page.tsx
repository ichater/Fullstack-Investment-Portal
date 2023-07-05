import React from "react";

export default function page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  return <div>{slug}</div>;
}
