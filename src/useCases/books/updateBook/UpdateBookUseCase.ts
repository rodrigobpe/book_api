import AppError from "../../../helpers/AppError";
import { BookRepository } from "repositories/BookRepository";
import { UpdateBookDTO } from "./UpdateBookDTO";
import { Book } from "../../../entities/Book";

export default class UpdateBookUseCase{
    constructor(private readonly bookRepository:BookRepository){}
    async execute({id,author,price,title}:UpdateBookDTO):Promise<Book | null>{
        const bookAlreadyExist = await this.bookRepository.getById(id);
        if(!bookAlreadyExist){
            throw new AppError(400,"Book doesn't exist");
        }

        await this.bookRepository.updateBook({id,author,price,title});
        const updatedBook = await this.bookRepository.getById(id);
        return updatedBook
    }
}