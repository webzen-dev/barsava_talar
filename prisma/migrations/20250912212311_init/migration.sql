/*
  Warnings:

  - Added the required column `date` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `media` ADD COLUMN `isMain` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `reservation` ADD COLUMN `date` VARCHAR(191) NOT NULL;
