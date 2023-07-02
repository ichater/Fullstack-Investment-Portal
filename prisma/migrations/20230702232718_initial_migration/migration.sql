-- CreateEnum
CREATE TYPE "ROLE" AS ENUM ('ADVISER', 'CLIENT');

-- CreateEnum
CREATE TYPE "ACCESS" AS ENUM ('READONLY', 'READWRITE');

-- CreateEnum
CREATE TYPE "INVESTMENTCATEGORY" AS ENUM ('FUND', 'SMA');

-- CreateTable
CREATE TABLE "Adviser" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "profileImage" TEXT NOT NULL,
    "secondaryImages" TEXT[],
    "role" "ROLE" NOT NULL,

    CONSTRAINT "Adviser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "profileImage" TEXT NOT NULL,
    "adviserId" TEXT NOT NULL,
    "role" "ROLE" NOT NULL,
    "access" "ACCESS" NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "Value" INTEGER NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "clientId" TEXT NOT NULL,
    "adviserId" TEXT NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shares" (
    "id" TEXT NOT NULL,
    "asxCode" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,

    CONSTRAINT "Shares_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ManagedInvestments" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "apir" TEXT NOT NULL,
    "nabOwned" BOOLEAN NOT NULL,
    "mer" INTEGER NOT NULL,
    "category" "INVESTMENTCATEGORY" NOT NULL,
    "accountId" TEXT NOT NULL,

    CONSTRAINT "ManagedInvestments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Adviser_email_key" ON "Adviser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ManagedInvestments_apir_key" ON "ManagedInvestments"("apir");

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_adviserId_fkey" FOREIGN KEY ("adviserId") REFERENCES "Adviser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_adviserId_fkey" FOREIGN KEY ("adviserId") REFERENCES "Adviser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shares" ADD CONSTRAINT "Shares_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ManagedInvestments" ADD CONSTRAINT "ManagedInvestments_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
