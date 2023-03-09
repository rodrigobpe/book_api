import BookPrismaRepository from "../../../repositories/implementation/BookPrismaRepository";
import GetAllBooksController from "./GetAllBooksController";
import GetAllBooksUseCase from "./GetAllBooksUseCase";

const bookRepository = new BookPrismaRepository()
const getAllBooksUseCase = new GetAllBooksUseCase(bookRepository)
export const getAllBooksController = new GetAllBooksController(getAllBooksUseCase);
