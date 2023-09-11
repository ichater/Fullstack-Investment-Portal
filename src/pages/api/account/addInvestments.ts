import { prisma } from "@/prismaInstance/client";
import { NextApiRequest, NextApiResponse } from "next";

type PurchasedInvestments = {
  id: string;
  value: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const {
      accountId,
      purchasedShares,
      purchasedFunds,
    }: {
      accountId: string;
      purchasedShares: PurchasedInvestments[];
      purchasedFunds: PurchasedInvestments[];
    } = req.body;

    const account = await prisma.account.findUnique({
      where: {
        id: accountId,
      },
      include: {
        shares: true,
        managedInvestments: true,
      },
    });

    if (!account) {
      return res.status(404).json({ error: "account not found" });
    }

    // const sharesExist =
    //   purchasedShares.length &&
    //   (await prisma.shareInAccount.findMany({
    //     where: {
    //       accountId: account.id,
    //     },
    //   }));

    const addedShares =
      purchasedShares.length &&
      (await prisma.shareInAccount.createMany({
        data: purchasedShares.map((share) => ({
          accountId: account.id,
          shareId: share.id,
          value: share.value,
        })),
      }));

    const addedFunds =
      purchasedFunds.length &&
      (await prisma.managedInvestmentInAccount.createMany({
        data: purchasedFunds.map((fund) => ({
          accountId: account.id,
          investmentId: fund.id,
          value: fund.value,
        })),
      }));

    const purchasedShareTotal: number = !!purchasedShares.length
      ? purchasedShares
          .map((share) => share.value)
          .reduce((acc, cur) => acc + cur)
      : 0;

    const purchasedFundTotal: number = !!purchasedFunds.length
      ? purchasedFunds.map((fund) => fund.value).reduce((acc, cur) => acc + cur)
      : 0;

    const cashInShares: number = purchasedShareTotal + account.cashInShares;

    const cashInInvestments: number =
      purchasedFundTotal + account.cashInInvestments;

    const cashAccount: number =
      account.cashAccount - purchasedFundTotal - purchasedShareTotal;

    const updatedAccount = await prisma.account.update({
      where: {
        id: accountId,
      },
      data: {
        cashAccount,
        cashInInvestments,
        cashInShares,
      },
      include: {
        shares: true,
        managedInvestments: true,
      },
    });
    return res
      .status(200)
      .json({ account: updatedAccount, addedFunds, addedShares });
  }
  return res.status(405).json({ error: "bad request" });
}
