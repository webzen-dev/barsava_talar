/*
  Warnings:

  - You are about to drop the column `firstName` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `comments` table. All the data in the column will be lost.
  - Added the required column `fullName` to the `comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `comments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comments` DROP COLUMN `firstName`,
    DROP COLUMN `lastName`,
    ADD COLUMN `fullName` VARCHAR(191) NOT NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL;
