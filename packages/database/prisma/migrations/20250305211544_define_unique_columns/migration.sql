/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `priority` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `status` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "category_name_key" ON "category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "priority_name_key" ON "priority"("name");

-- CreateIndex
CREATE UNIQUE INDEX "status_name_key" ON "status"("name");
