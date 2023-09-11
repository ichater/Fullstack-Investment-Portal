import Link from "next/link";
import React from "react";

export default function NavigationTabs({
  slug,
  clientSlug,
}: {
  slug: string;
  clientSlug: string;
}) {
  return (
    <div className="toggle-view_tabs">
      <Link className="adviser-tab_link" href={`/adviser/${slug}`}>
        <button className="adviser-tab">Adviser Profile</button>
      </Link>
      <Link
        className="adviser-tab_link"
        href={{
          pathname: `/adviser/${slug}/clients/${clientSlug}`,
          query: {
            view: "accounts",
          },
        }}
      >
        <button className="adviser-tab"> Accounts</button>
      </Link>
    </div>
  );
}
