import React from "react";
import NavigationTabs from "./components/NavigationTabs";

export default function page({
  params: { slug, clientSlug, accountSlug },
}: {
  params: { slug: string; clientSlug: string; accountSlug: string };
}) {
  return (
    <div className="account-display_wrapper">
      <NavigationTabs slug={slug} clientSlug={clientSlug} />
    </div>
  );
}
