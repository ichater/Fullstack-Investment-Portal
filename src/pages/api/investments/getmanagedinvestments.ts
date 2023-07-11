import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "@/prismaInstance/client";
import { INVESTMENTCATEGORY } from "@prisma/client";
import { queryParamParserApi } from "@/lib/utils/queryparamparser";
import { GetResult } from "@prisma/client/runtime/library";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { name, category, nab } = req.query;

      const parsedName = queryParamParserApi(name);
      const parsedCategory = queryParamParserApi(category);
      const parsedNabOwned = queryParamParserApi(nab);

      let whereCondition = {};

      const isNabOwned: boolean | "" =
        parsedNabOwned === "true"
          ? true
          : parsedNabOwned === "false"
          ? false
          : "";

      if (typeof isNabOwned === "boolean") {
        whereCondition = {
          ...whereCondition,
          nabOwned: isNabOwned,
        };
      }

      const investmentCategory: INVESTMENTCATEGORY | "" =
        parsedCategory === "fund"
          ? "FUND"
          : parsedCategory === "sma"
          ? "SMA"
          : "";

      if (!!investmentCategory) {
        whereCondition = {
          ...whereCondition,
          category: investmentCategory,
        };
      }

      const data = await prisma.managedInvestment.findMany({
        where: {
          ...whereCondition,
          name: {
            contains: parsedName,
            mode: "insensitive",
          },
        },
      });

      return res.status(200).json({ data });
    } catch (error) {
      console.error("Error querying shares:", error);
      return res.status(500).json({ errorMessage: "Internal Server Error" });
    }
  }
  return res.status(405).json({ errorMessage: "method not allowed" });
}
