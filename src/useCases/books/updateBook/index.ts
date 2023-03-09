import BookPrismaRepository from "../../../repositories/implementation/BookPrismaRepository";
import UpdateBookController  from "./UpdateBookController";
import UpdateBookUseCase from "./UpdateBookUseCase";

const bookRepository = new BookPrismaRepository()
const updateBookUseCase = new UpdateBookUseCase(bookRepository)
export const updateBookController = new UpdateBookController(updateBookUseCase);
