-- AlterTable
ALTER TABLE "Edital" ADD COLUMN "dataFim" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
                     ADD COLUMN "dataInicio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
                     ADD COLUMN "status" TEXT NOT NULL DEFAULT 'ativo';

-- AlterTable
ALTER TABLE "Inscricao" ADD COLUMN "status" TEXT NOT NULL DEFAULT 'pendente';

-- AlterTable
ALTER TABLE "User" ADD COLUMN "email" TEXT NOT NULL DEFAULT '',
                   ADD COLUMN "role" TEXT NOT NULL DEFAULT 'user',
                   ADD COLUMN "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
                   ADD COLUMN "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- After adding the columns with default values, update the existing rows
UPDATE "Edital" SET "dataFim" = "createdAt" + INTERVAL '30 days', "dataInicio" = "createdAt";
UPDATE "User" SET "email" = "username" || '@example.com';

-- Now we can add the unique constraint to the email column
ALTER TABLE "User" ADD CONSTRAINT "User_email_key" UNIQUE ("email");

-- Finally, remove the default values from the columns that shouldn't have them
ALTER TABLE "Edital" ALTER COLUMN "dataFim" DROP DEFAULT,
                     ALTER COLUMN "dataInicio" DROP DEFAULT;

ALTER TABLE "User" ALTER COLUMN "email" DROP DEFAULT,
                   ALTER COLUMN "updatedAt" DROP DEFAULT;

