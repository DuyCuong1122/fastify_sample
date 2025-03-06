import Fastify from "fastify";

const fastify = Fastify({ logger: true });

import prisma from "./prisma";

fastify.addContentTypeParser("application/json", { parseAs: "string" }, (req, body, done) => {
  try {
    done(null, JSON.parse(body as string));
  } catch (err) {
    done(err as Error, undefined);
  }
});


fastify.get("/books", async (request, reply) => {
  const book = await prisma.book.findMany();
  return { data: book };
});

// Sample route
fastify.get("/", async (request, reply) => {
  return { message: "Welcome to Fastify with TypeScript!" };
});

fastify.post("/books", async (request, reply) => {
  const { title, author, published_date, genre, price } = request.body as {
    title: string;
    author: string;
    published_date?: string;
    genre?: string;
    price?: number;
  };
  const book = await prisma.book.create({
    data: { title, author, published_date, genre, price },
  });
  return { data: book };
});

// Start the server
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log("Server is running at http://localhost:3000");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
