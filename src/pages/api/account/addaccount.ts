import { ADVISERFEETYPE, INVESTMENSTRATEGY } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/prismaInstance/client";
import { v4 as uuidv4 } from "uuid";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const {
      clientId,
      totalValue,
      adviserFee,
      adviserFeeType,
      name,
      investmentStrategy,
    }: {
      clientId: string;
      totalValue: number;
      adviserFee: string;
      adviserFeeType: ADVISERFEETYPE;
      name: string;
      investmentStrategy: INVESTMENSTRATEGY;
    } = req.body;

    const validationSchema = [
      {
        valid: totalValue > 20000,
        errorMessage: "minimum initial investment amount is $20000",
      },
    ];

    const errorArr = validationSchema
      .filter(({ valid }) => !valid)
      .map(({ errorMessage }) => errorMessage);

    if (errorArr.length) {
      return res.status(400).json({
        errorMessage: `${errorArr.join(", ")}`,
      });
    }

    const client = await prisma.client.findUnique({
      where: {
        id: clientId,
      },
    });

    if (!client) {
      return res.status(400).json({
        errorMessage: `client information not found`,
      });
    }

    const account = await prisma.account.create({
      data: {
        id: uuidv4(),
        clientId,
        totalValue,
        cashAccount: totalValue,
        adviserFee,
        adviserFeeType,
        cashInShares: 0,
        cashInInvestments: 0,
        name,
        slug: `${name}-${investmentStrategy.toLowerCase()}`,
        investmentStrategy,
      },
    });

    return res.status(200).json({ account });
  }
  return res.status(405).json({ error: "bad request" });
}
