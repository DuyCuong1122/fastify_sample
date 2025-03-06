import { FastifyReply, FastifyRequest } from 'fastify';
import { getBooks, addBook } from '../service/booksService';
export async function getBooksHandler(request: FastifyRequest, reply: FastifyReply) {
 const books = await getBooks();
 reply.send(books);
}
export async function addBookHandler(request: FastifyRequest, reply: FastifyReply) {
 const book = request.body; // Add type-checking here with TypeScript interfaces
 const result = await addBook(book);
 reply.status(201).send(result);
}