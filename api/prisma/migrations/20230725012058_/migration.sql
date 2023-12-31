/*
  Warnings:

  - You are about to drop the column `name_user` on the `Schedule` table. All the data in the column will be lost.
  - Added the required column `name` to the `Schedule` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Schedule" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "date" DATETIME NOT NULL
);
INSERT INTO "new_Schedule" ("date", "id", "phone") SELECT "date", "id", "phone" FROM "Schedule";
DROP TABLE "Schedule";
ALTER TABLE "new_Schedule" RENAME TO "Schedule";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
