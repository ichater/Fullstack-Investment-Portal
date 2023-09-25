import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/prismaInstance/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const advisers = await prisma.adviser.findMany();

    if (!advisers) {
      res.status(404).json({ errorMessage: "404, data not found" });
    }
    return res.status(200).json({ advisers });
  }

  return res.status(405).json({ errorMessage: "incorrect method used" });
}
