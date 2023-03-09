import BookPrismaRepository from "../../../repositories/implementation/BookPrismaRepository";
import CreateBookController from "./CreateBookController";
import CreateBookUseCase from "./CreateBookUseCase";

const bookRepository = new BookPrismaRepository();
const createBookUseCase = new CreateBookUseCase(bookRepository);
export const createBookController = new CreateBookController(createBookUseCase);