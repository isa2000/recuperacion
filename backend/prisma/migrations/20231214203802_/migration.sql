/*
  Warnings:

  - The primary key for the `Bus` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID_CLIENTE` on the `Bus` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Bus" DROP CONSTRAINT "Bus_pkey",
DROP COLUMN "ID_CLIENTE",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Bus_pkey" PRIMARY KEY ("id");
