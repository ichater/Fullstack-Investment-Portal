import "../styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Advisor-link unauthed",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Advisor-link unauthed</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="https://logowik.com/content/uploads/images/dollar3010.jpg"
        />
      </head>
      <body className={inter.className}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
