import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/prismaInstance/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const unparsedShares = req.body;

    try {
      const addedShares = await prisma.shares.createMany({
        data: unparsedShares,
      });

      return res.status(200).json({ message: "Shares added!", addedShares });
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }
  return res.status(404).json({ errorMessage: " Method not allowed" });
}
