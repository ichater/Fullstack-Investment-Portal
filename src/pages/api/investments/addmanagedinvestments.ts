import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/prismaInstance/client";
import { INVESTMENTCATEGORY } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const investments = req.body;

    const data = investments
      .map(
        ({
          id,
          name,
          apir,
          nabOwned,
          mer,
          category,
        }: {
          id: string;
          name: string;
          apir: string;
          nabOwned: boolean;
          mer: number;
          category: "Managed Fund" | "Seperately Managed Account";
        }) => ({
          id,
          name,
          apir,
          nabOwned,
          mer: typeof mer === "number" ? mer : 0.1,
          category:
            category === "Managed Fund"
              ? INVESTMENTCATEGORY.FUND
              : INVESTMENTCATEGORY.SMA,
        })
      )
      .filter((investment: any) => !!investment.apir);
    try {
      const createdInvestments = await prisma.managedInvestment.createMany({
        data,
      });

      return res
        .status(200)
        .json({ message: "investments created:", createdInvestments });
    } catch (error) {
      console.log(error);
    }
    return res.status(404).json({ errorMessage: " Method not allowed" });
  }
}
