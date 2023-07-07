import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/prismaInstance/client";
import { queryParamParser } from "@/utils/queryparamparser";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { name, asx } = req.query;

      const parsedAsx: string = queryParamParser(asx);
      const parsedName: string = queryParamParser(name);

      const data = await prisma.share.findMany({
        where: {
          asxCode: {
            contains: parsedAsx,
            mode: "insensitive",
          },
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
