/*
  Warnings:

  - A unique constraint covering the columns `[slugtr]` on the table `Post` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Post_slugtr_key" ON "Post"("slugtr");
