import BookPrismaRepository from "../../../repositories/implementation/BookPrismaRepository";
import GetBookByIdController  from "./GetBookByIdController";
import GetBookByIdUseCase from "./GetBookByIdUseCase";

const bookRepository = new BookPrismaRepository()
const getBookByIdUseCase = new GetBookByIdUseCase(bookRepository)
export const getBookByIdController = new GetBookByIdController(getBookByIdUseCase);
