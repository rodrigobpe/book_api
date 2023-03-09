import BookPrismaRepository from "../../../repositories/implementation/BookPrismaRepository";
import DeleteBookController from "./DeleteBookController";
import DeleteBookUseCase from "./DeleteBookUseCase";


const bookPrismaRepository = new BookPrismaRepository() 
const deleteBookUseCase = new DeleteBookUseCase(bookPrismaRepository)
export const deleteBookController = new DeleteBookController(deleteBookUseCase)