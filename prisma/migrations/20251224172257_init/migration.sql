/*
  Warnings:

  - You are about to drop the column `memberId` on the `reservation` table. All the data in the column will be lost.
  - You are about to drop the `members` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `reservation` DROP FOREIGN KEY `Reservation_memberId_fkey`;

-- DropIndex
DROP INDEX `Reservation_memberId_fkey` ON `reservation`;

-- AlterTable
ALTER TABLE `reservation` DROP COLUMN `memberId`;

-- DropTable
DROP TABLE `members`;
