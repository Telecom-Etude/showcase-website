-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL DEFAULT '',
    "email" TEXT NOT NULL,
    "image" TEXT,
    "blogAdmin" BOOLEAN NOT NULL DEFAULT false,
    "userAdmin" BOOLEAN NOT NULL DEFAULT false,
    "blogAuthor" BOOLEAN NOT NULL DEFAULT false,
    "formAdmin" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_User" ("blogAdmin", "blogAuthor", "email", "formAdmin", "id", "image", "userAdmin") SELECT "blogAdmin", "blogAuthor", "email", "formAdmin", "id", "image", "userAdmin" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
