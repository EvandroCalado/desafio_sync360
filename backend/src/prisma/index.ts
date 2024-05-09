import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient | null = null;

// Função para criar uma instância única do Prisma Client
const getPrismaInstance = (): PrismaClient => {
  if (!prisma) {
    prisma = new PrismaClient();
  }
  return prisma;
};

export default getPrismaInstance();
