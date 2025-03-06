import { FastifyInstance } from 'fastify';
import { getBooksHandler, addBookHandler } from '../controllers/booksController';
export default async function bookRoutes(fastify: FastifyInstance) {
 fastify.get('/books', getBooksHandler);
 fastify.post('/books', addBookHandler);
}

