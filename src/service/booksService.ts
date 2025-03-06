import prisma from '../plugins/prisma';

export async function getBooks() {
 return await prisma.book.findMany(); // Fetch all books
}

export async function addBook(book: any) {
 return await prisma.book.create({ data: book });
}