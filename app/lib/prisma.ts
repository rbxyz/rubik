import { PrismaClient } from "@prisma/client";

declare global {
  let prisma: PrismaClient | undefined;
}

// Inicializa o cliente Prisma corretamente
const prisma =
  global.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : [],
  });

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export default prisma;
