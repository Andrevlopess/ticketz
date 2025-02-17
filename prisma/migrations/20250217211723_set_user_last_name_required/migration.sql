/*
  Warnings:

  - You are about to drop the column `noteType` on the `ticket_notes` table. All the data in the column will be lost.
  - Made the column `last_name` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ticket_notes" DROP COLUMN "noteType",
ADD COLUMN     "NoteType" "NoteType" NOT NULL DEFAULT 'PRIVATE';

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "last_name" SET NOT NULL;
