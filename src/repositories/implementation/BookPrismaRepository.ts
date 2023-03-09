import { getAllBooksDTO, updateRequest } from "repositories/BookRepositoryDTO";
import { prisma } from "../../database";
import { Book } from "../../entities/Book";
import { BookRepository } from "../BookRepository";

export default class BookPrismaRepository implements BookRepository {
    async create({ author, price, title }: Book): Promise<void> {
        await prisma.book.create({
            data: {
                author,
                price,
                title
            }
        })

    }
    async findByTitle(title: string): Promise<Book | null> {
        const book = await prisma.book.findUnique({
            where: {
                title
            }
        })

        if (!book) {
            return null
        }
        return book
    }
    async getAllBooks({ author, price, title }: getAllBooksDTO): Promise<Book[] | null> {
        const maxPriceBook = await prisma.book.aggregate({
            _max: {
                price: true
            }
        })
        const books = await prisma.book.findMany({
            where: {
                author: {
                    contains: author
                },
                title: {
                    contains: title
                },
                price: {
                    gte: Number(price) || 0,
                    lte: Number(price) + 1|| Number(maxPriceBook._max.price)
                }
            },
            orderBy: {
                price:'desc'
            }
        })
        if (!books) {
            return null
        }
        return books
    }
    async deleteBook(id: string): Promise<void> {
        await prisma.book.delete({
            where: {
                id
            }
        })
    }

    async getById(id: string): Promise<Book | null> {
        const book = await prisma.book.findFirst({
            where: {
                id
            }
        })
        if (!book) {
            return null
        }
        return book
    }
    async updateBook({ id, author, price, title }: updateRequest): Promise<void> {
        await prisma.book.update({
            data: {
                author,
                price,
                title
            }, where: {
                id
            }
        })
    }

}