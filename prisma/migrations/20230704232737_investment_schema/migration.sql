/*
  Warnings:

  - You are about to drop the column `Value` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the `ManagedInvestments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Shares` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `value` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ManagedInvestments" DROP CONSTRAINT "ManagedInvestments_accountId_fkey";

-- DropForeignKey
ALTER TABLE "Shares" DROP CONSTRAINT "Shares_accountId_fkey";

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "Value",
ADD COLUMN     "value" DOUBLE PRECISION NOT NULL;

-- DropTable
DROP TABLE "ManagedInvestments";

-- DropTable
DROP TABLE "Shares";

-- CreateTable
CREATE TABLE "ShareInAccount" (
    "accountId" TEXT NOT NULL,
    "shareId" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ShareInAccount_pkey" PRIMARY KEY ("accountId","shareId")
);

-- CreateTable
CREATE TABLE "Share" (
    "id" TEXT NOT NULL,
    "asxCode" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "Share_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ManagedInvestmentInAccount" (
    "accountId" TEXT NOT NULL,
    "investmentId" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ManagedInvestmentInAccount_pkey" PRIMARY KEY ("accountId","investmentId")
);

-- CreateTable
CREATE TABLE "ManagedInvestment" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "apir" TEXT NOT NULL,
    "nabOwned" BOOLEAN NOT NULL,
    "mer" DOUBLE PRECISION NOT NULL,
    "category" "INVESTMENTCATEGORY" NOT NULL,

    CONSTRAINT "ManagedInvestment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ManagedInvestment_apir_key" ON "ManagedInvestment"("apir");

-- AddForeignKey
ALTER TABLE "ShareInAccount" ADD CONSTRAINT "ShareInAccount_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShareInAccount" ADD CONSTRAINT "ShareInAccount_shareId_fkey" FOREIGN KEY ("shareId") REFERENCES "Share"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ManagedInvestmentInAccount" ADD CONSTRAINT "ManagedInvestmentInAccount_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ManagedInvestmentInAccount" ADD CONSTRAINT "ManagedInvestmentInAccount_investmentId_fkey" FOREIGN KEY ("investmentId") REFERENCES "ManagedInvestment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
