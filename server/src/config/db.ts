import { PrismaClient } from '@prisma/client';
export const prisma = new PrismaClient();

export async function connectDb() {
  try {
    await prisma.$connect();
    console.log('Database connected successfully');
  } catch (error) {
    console.log(error);
    throw new Error('Database not connected');
  } finally {
    prisma.$disconnect();
  }
}
