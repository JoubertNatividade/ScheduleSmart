-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar_url" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_Users" ("avatar_url", "email", "id", "name", "password") SELECT "avatar_url", "email", "id", "name", "password" FROM "Users";
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
CREATE UNIQUE INDEX "Users_name_key" ON "Users"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
