import { fastify } from 'fastify';
import { fastifyCors } from '@fastify/cors';
import { config } from './config/config.js';
import { fastifyCookie } from '@fastify/cookie';
import { fastifyHelmet } from '@fastify/helmet';
import { prisma } from './config/db.js';

const app = fastify();
app.register(fastifyCors, {
  credentials: true,
  origin: config.FRONTEND_URL,
});

app.register(fastifyCookie);
app.register(fastifyHelmet);

app.get('/', (req, reply) => {
  reply.status(200).send({ Ping: 'Pong' });
});

try {
  app.listen({ port: config.PORT });
  console.log(`Server is running on port: ${config.PORT}`);
} catch (error) {
  console.log(error);
}
