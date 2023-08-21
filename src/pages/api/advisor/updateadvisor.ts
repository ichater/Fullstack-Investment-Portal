import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import { prisma } from "@/prismaInstance/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PUT") {
    const {
      email,
      bio,
      city,
      phone,
      company,
    }: {
      email: string;
      bio: string;
      city: string;
      phone: string;
      company: string;
    } = req.body;

    const validationSchema = [
      {
        valid: validator.isLength(bio, { min: 0, max: 1000 }),
        errorMessage: "bio must be less than 1000 characters",
      },
      {
        valid: validator.isLength(city, { min: 3, max: 50 }),
        errorMessage: "city must be between 3 and 50 characters",
      },
      {
        valid: validator.isLength(phone, { min: 3, max: 12 }),
        errorMessage: "phone must be between 3 and 12 characters",
      },
      {
        valid: validator.isLength(company, { min: 3, max: 50 }),
        errorMessage: "company must be between 3 and 50 characters",
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

    const updatedAdviser = await prisma.adviser.update({
      where: {
        email,
      },
      data: {
        bio,
        city,
        phone,
        company,
      },
    });

    res.status(200).json({ updatedAdviser });
  }
  res.status(405).json({ error: "bad request" });
}
