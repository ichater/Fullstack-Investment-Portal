import { ACCESS, Adviser } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import bcrypt from "bcrypt";
import * as jose from "jose";
import { prisma } from "@/prismaInstance/client";
import { setCookie } from "cookies-next";
import { ROLE } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const {
      adviserId,
      firstName,
      lastName,
      email,
      password,
      bio,
      access,
      profileImage,
    }: {
      adviserId: string;
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      bio: string;
      access: ACCESS;
      profileImage: string;
    } = req.body;

    const validationSchema = [
      {
        valid: validator.isEmail(email),
        errorMessage: "email address must be a valid email address",
      },
      {
        valid: validator.isLength(firstName, { min: 3, max: 50 }),
        errorMessage: "first name must be between 3 and 50 characters",
      },
      {
        valid: validator.isLength(lastName, { min: 3, max: 50 }),
        errorMessage: "last name must be between 3 and 50 characters",
      },
      {
        valid: validator.isLength(bio, { min: 0, max: 1000 }),
        errorMessage: "bio must be less than 1000 characters",
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

    const clientWithEmail = await prisma.adviser.findUnique({
      where: { email },
    });

    if (clientWithEmail) {
      return res
        .status(400)
        .json({ errorMessage: "Email is associated with another account" });
    }

    const hashedPassword = await bcrypt
      .genSalt(10)
      .then((salt) => {
        return bcrypt.hash(password, salt);
      })
      .then((hash) => {
        return hash;
      })
      .catch((err) => console.error(err.message));

    if (!hashedPassword) {
      return res.status(500).json({
        errorMessage: "Internal error, password hashing failed",
      });
    }

    const adviser = await prisma.adviser.findUnique({
      where: {
        id: adviserId,
      },
    });

    if (!adviser) {
      return res.status(500).json({
        errorMessage: "no adviser found",
      });
    }

    const client = await prisma.client.create({
      data: {
        id: uuidv4(),
        firstName,
        lastName,
        slug: `${firstName.toLowerCase()}-${lastName.toLowerCase()}`,
        email,
        password: hashedPassword,
        profileImage,
        bio,
        adviserId,
        role: ROLE.CLIENT,
        access,
        accounts: undefined,
      },
    });

    res.status(200).json({ client, adviser });
  }
  res.status(405).json({ error: "bad request" });
}
