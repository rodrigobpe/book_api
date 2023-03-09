import { Book } from "../../../entities/Book";
import AppError from "../../../helpers/AppError";
import { BookRepository } from "repositories/BookRepository";
import { GetAllBooksDTO } from "./GetAllBooksDTO";

export default class GetAllBooksUseCase{
    constructor(private readonly bookRepository:BookRepository){}
    async execute({author,price,title}:GetAllBooksDTO):Promise<Book[] | null>{
        const books = await this.bookRepository.getAllBooks({author,price,title})
        if(books?.length === 0){
            throw new AppError(400,"There is no registered book")
        }
        return books
    }
}