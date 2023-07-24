import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/prismaInstance/client";
import { queryParamParserApi } from "@/lib/utils/queryparamparser";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { adviserId } = req.query;

    if (!adviserId) {
      return res.status(404).json({ error: "no adviserId" });
    }
    const id: string = queryParamParserApi(adviserId);

    const clients = await prisma.client.findMany({
      where: {
        adviserId: id,
      },
    });

    if (!clients) {
      return res.status(404).json({ error: "no clients found!" });
    }

    return res.status(200).json({ clients });
  }
  return res.status(405).json({ error: "bad request" });
}
