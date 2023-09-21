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
    console.log("Sign up post hit");
    const { email, firstName, lastName, bio, city, phone, company, password } =
      req.body;

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
      {
        valid: validator.isStrongPassword(password),
        errorMessage:
          "password must be at least 8 characters long with at least 1 uppercase, 1 lowercase, 1 number and 1 special character",
      },
    ];

    const errorArr = validationSchema
      .filter(({ valid }) => !valid)
      .map(({ errorMessage }) => errorMessage);

    if (!!errorArr.length) {
      return res.status(400).json({
        errorMessage: `${errorArr.join(", ")}`,
      });
    }

    const advisorWithEmail = await prisma.adviser.findUnique({
      where: { email },
    });

    if (advisorWithEmail) {
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

    const adviser = await prisma.adviser.create({
      data: {
        id: uuidv4(),
        email: email as string,
        firstName: firstName as string,
        lastName: lastName as string,
        slug: `${firstName.toLowerCase() as string}-${
          lastName.toLowerCase() as string
        }`,
        bio: bio as string,
        city: city as string,
        phone: phone as string,
        company: company as string,
        password: hashedPassword,
        profileImage: "",
        role: ROLE.ADVISER,
        secondaryImages: [],
        clients: undefined,
      },
    });

    // algorithm for the protected header
    const alg = "HS256";
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    // create web token through jose
    const token = await new jose.SignJWT({ email: adviser.email })
      .setProtectedHeader({ alg })
      .setExpirationTime("24h")
      .sign(secret);

    setCookie("jwt", token, { req, res, maxAge: 60 * 6 * 24 });

    return res.status(200).json({ adviser });
  }

  console.log("Sign up post not hit");
  return res
    .status(405)
    .json({ errorMessage: `bad request, you're using ${req.method}` });
}
