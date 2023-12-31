import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";

export async function middleware(req: NextRequest, res: NextResponse) {
  const bearerToken = req.headers.get("authorization") as string;

  if (!bearerToken) {
    console.log("No token!");
    return NextResponse.redirect(new URL("/log-in", req.url));
  }

  const token = bearerToken.split(" ")[1];

  if (!token) {
    return new NextResponse(
      JSON.stringify({ errorMessage: "unauthorized request no token" }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  console.log("SECRET", process.env.JWT_SECRET);
  try {
    await jose.jwtVerify(token, secret);
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ errorMessage: "Unauthorized request" }),
      { status: 401 }
    );
  }
}

export const config = {
  matcher: ["/api/auth/meadviser"],
};
