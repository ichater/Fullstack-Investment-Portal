import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { prisma } from "../../../../server/db/client";

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

  const user = await prisma.adviser.findUnique({
    where: { email: payload.email },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      city: true,
      email: true,
      password: true,
      phone: true,
      bio: true,
      role: true,
    },
  });

  if (!user) {
    return res.status(401).json({ errorMessage: "User not found" });
  }

  return res.json({
    user,
  });
}
