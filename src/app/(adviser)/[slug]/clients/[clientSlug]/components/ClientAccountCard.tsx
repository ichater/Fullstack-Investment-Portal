import SubmitButton from "@/app/components/formcomponents/SubmitButton";
import { ClientAccountInformation } from "@/types";
import Link from "next/link";
import React from "react";

export default function ClientAccountCard({
  account,
  params: { slug, clientSlug },
}: {
  account: ClientAccountInformation;
  params: { slug: string; clientSlug: string };
}) {
  const {
    totalValue,
    cashAccount,
    adviserFee,
    cashInShares,
    cashInInvestments,
    name,
    slug: accountSlug,
    investmentStratgy,
  } = account;
  return (
    <Link
      href={`/${slug}/clients/${clientSlug}/account/${accountSlug}`}
      passHref
      legacyBehavior
    >
      <div className="client-account-card_wrapper">
        <div className="card-heading_wrapper">
          <h3 className="card_heading">{name}</h3>
          <p className="card_subheading">
            Style: {investmentStratgy.toLocaleLowerCase()}
          </p>
        </div>
        <div className="client-info_wrapper">
          <div className="card-info-section_wrapper">
            <div className="card-info_finance">
              <div> Total Value:</div> <div> ${totalValue}</div>
            </div>
            <div className="card-info_finance">
              <div> Available cash: </div> <div>${cashAccount}</div>
            </div>
          </div>
          <div className="card-info-section_wrapper">
            <div className="card-info_finance">
              <div> Adviser Fee:</div> <div> {adviserFee}</div>
            </div>
          </div>
          <div className="card-info-section_wrapper">
            <div className="card-info_finance">
              <div> Cash in funds:</div> <div> ${cashInInvestments}</div>
            </div>
            <div className="card-info_finance">
              <div> Cash in shares: </div> <div>${cashInShares}</div>
            </div>
          </div>

          <div className="btn-wrapper_card">
            <SubmitButton
              text="View Account"
              fontSize={1}
              height={3}
              width={8}
              onHover={{
                backgroundColor: "rgb(34, 177, 76)",
                border: "1px solid rgba(54, 172, 71, 0.2)",
                fontSize: 1.1,
              }}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
