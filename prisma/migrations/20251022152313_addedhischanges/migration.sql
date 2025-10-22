/*
  Warnings:

  - Added the required column `content` to the `Resume` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_industry_fkey";

-- AlterTable
ALTER TABLE "public"."Assessment" ALTER COLUMN "improvementTip" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."CoverLetter" ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'draft',
ALTER COLUMN "jobDescription" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."Resume" ADD COLUMN     "atsScore" DOUBLE PRECISION,
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "feedback" TEXT;

-- AlterTable
ALTER TABLE "public"."User" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "imageUrl" DROP NOT NULL,
ALTER COLUMN "industry" DROP NOT NULL;

-- DropEnum
DROP TYPE "public"."DemandLevel";

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_industry_fkey" FOREIGN KEY ("industry") REFERENCES "public"."IndustryInsight"("industry") ON DELETE SET NULL ON UPDATE CASCADE;
