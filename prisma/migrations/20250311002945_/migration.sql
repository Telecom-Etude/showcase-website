/*
  Warnings:

  - You are about to drop the column `content` on the `Post` table. All the data in the column will be lost.
  - Added the required column `contentEN` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contentFR` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titlefr" TEXT NOT NULL,
    "titleen" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "slugfr" TEXT NOT NULL,
    "slugen" TEXT NOT NULL,
    "contentFR" TEXT NOT NULL,
    "contentEN" TEXT NOT NULL,
    "validated" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Post" ("createdAt", "id", "locale", "slugen", "slugfr", "titleen", "titlefr", "updatedAt", "validated") SELECT "createdAt", "id", "locale", "slugen", "slugfr", "titleen", "titlefr", "updatedAt", "validated" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
CREATE UNIQUE INDEX "Post_id_key" ON "Post"("id");
CREATE UNIQUE INDEX "Post_slugfr_key" ON "Post"("slugfr");
CREATE UNIQUE INDEX "Post_slugen_key" ON "Post"("slugen");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
