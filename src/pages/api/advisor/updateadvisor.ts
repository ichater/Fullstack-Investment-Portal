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

    res.status(405).json({});
  }
  res.status(405).json({ error: "bad request" });
}
