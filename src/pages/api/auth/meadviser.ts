import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { prisma } from "../../../../server/db/client";
import { AdviserIncomingDataFull } from "@/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const bearerToken = req.headers["authorization"] as string;

  const token = bearerToken.split(" ")[1];

  const payload = jwt.decode(token) as { email: string };

  if (!payload.email) {
    return res
      .status(401)
      .json({ errorMessage: "unauthorized request no token" });
  }

  const adviser: AdviserIncomingDataFull | null =
    await prisma.adviser.findUnique({
      where: { email: payload.email },
      include: {
        clients: {
          include: {
            accounts: {
              include: {
                shares: {
                  include: {
                    share: true,
                  },
                },
                managedInvestments: {
                  include: {
                    managedInvestment: true,
                  },
                },
              },
            },
          },
        },
      },
    });

  if (!adviser) {
    return res.status(401).json({ errorMessage: "User not found" });
  }

  return res.json({
    adviser,
  });
}
