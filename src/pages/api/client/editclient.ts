import { ACCESS } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import { prisma } from "@/prismaInstance/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PUT") {
    const {
      id,
      email,
      bio,
      access,
    }: { id: string; email: string; bio: string; access: ACCESS } = req.body;

    const validationSchema = [
      {
        valid: email !== "" && validator.isEmail(email),
        errorMessage: "email address must be a valid email address",
      },
      {
        valid: bio !== "" && validator.isLength(bio, { min: 0, max: 1000 }),
        errorMessage: "bio must be less than 1000 characters",
      },
      {
        valid: access === "READONLY" || access === "READWRITE",
        errorMessage: "incorrect access specification",
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

    const clientWithEmail = await prisma.adviser.findUnique({
      where: { email },
    });

    if (clientWithEmail) {
      return res.status(400).json({
        errorMessage: `${email} is already in use by another account`,
      });
    }

    const updatedClient = await prisma.client.update({
      where: {
        id: id,
      },
      data: {
        email,
        bio,
        access,
      },
    });

    if (!updatedClient) {
      return res.status(400).json({
        errorMessage: "client update failed",
      });
    }

    return res.status(200).json({ updatedClient });
  }
  return res.status(405).json({ errorMessage: "bad request" });
}
