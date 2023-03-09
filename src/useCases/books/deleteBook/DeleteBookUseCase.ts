import { BookRepository } from "repositories/BookRepository";
import { DeleteBookDTO } from "./DeleteBookDTO";
import AppError from "../../../helpers/AppError";

export default class DeleteBookUseCase{
    constructor(private readonly bookRepository:BookRepository){}
    async execute({id}:DeleteBookDTO):Promise<void>{
        const bookAlreadyExist = await this.bookRepository.getById(id);
        if(!bookAlreadyExist){
            throw new AppError(400,"The book does not exist");
        }

        await this.bookRepository.deleteBook(id);
    }
}