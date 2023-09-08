import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/prismaInstance/client";
import bcrypt from "bcrypt";
import { setCookie } from "cookies-next";
import * as jose from "jose";
import validator from "validator";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, password }: { email: string; password: string } = req.body;

    const validationSchema = [
      {
        valid: validator.isEmail(email),
        errorMessage: "email address must be a valid email address",
      },
      {
        valid: validator.isStrongPassword(password),
        errorMessage:
          "password must be at least 8 characters long with at least 1 uppercase, 1 lowercase, 1 number and 1 special character",
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

    const advisor = await prisma.adviser.findUnique({
      where: { email },
      include: {
        clients: {
          include: {
            accounts: {
              include: {
                shares: true,
                managedInvestments: true,
              },
            },
          },
        },
      },
    });

    if (!advisor) {
      return res.status(400).json({
        errorMessage: "email not associated with an account",
      });
    }
    const passwordCheck = await bcrypt
      .compare(password, advisor.password)
      .then((result) => result);

    if (!passwordCheck) {
      return res.status(400).json({
        errorMessage: "Incorrect password",
      });
    }

    const alg = "HS256";
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    // create web token through jose
    const token = await new jose.SignJWT({ email: advisor.email })
      .setProtectedHeader({ alg })
      .setExpirationTime("24h")
      .sign(secret);

    setCookie("jwt", token, { req, res, maxAge: 60 * 6 * 24 });
    return res.status(200).json({
      token,
      advisor,
    });
  }

  res.status(405).json({ error: "bad request" });
}
