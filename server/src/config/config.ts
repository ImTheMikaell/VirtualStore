import 'dotenv/config';

interface config {
  PORT: number;
  DATABASE_URL: string;
  FRONTEND_URL: string;
  JWT_SECRET: string;
}

export const config: config = {
  PORT: Number(process.env.PORT) || 3000,
  DATABASE_URL: process.env.DATABASE_URL || '',
  FRONTEND_URL: process.env.FRONTEND_URL || '',
  JWT_SECRET: process.env.JWT_SECRET || 'secret',
};
