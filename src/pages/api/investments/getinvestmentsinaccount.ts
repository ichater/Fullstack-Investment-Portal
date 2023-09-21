import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/prismaInstance/client";
import { queryParamParserApi } from "@/lib/utils/queryparamparser";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { accountId } = req.query;

  const id = queryParamParserApi(accountId);

  const account = await prisma.account.findUnique({
    where: {
      id,
    },
    include: {
      shares: true,
      managedInvestments: true,
    },
  });

  if (!account) {
    return res.status(404).json({ error: "no matching accounts found" });
  }

  const shareIds = account.shares.map((share) => share.shareId);

  let sharesArr = await prisma.share.findMany({
    where: {
      id: { in: [...shareIds] },
    },
  });

  const returnShares = sharesArr.map((share) => ({
    ...share,
    value: account.shares.filter((s) => s.shareId === share.id)[0].value,
  }));

  const fundIDs = account.managedInvestments.map((i) => i.investmentId);

  let fundsArr = await prisma.managedInvestment.findMany({
    where: { id: { in: [...fundIDs] } },
  });

  const returnFunds = fundsArr.map((fund) => ({
    ...fund,
    value: account.managedInvestments.filter(
      (f) => f.investmentId === fund.id
    )[0].value,
  }));

  return res.status(200).json({
    returnShares,
    returnFunds,
  });
}
