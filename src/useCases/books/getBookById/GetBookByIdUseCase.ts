import { Book } from "../../../entities/Book";
import { BookRepository } from "repositories/BookRepository";
import { GetBookByIdDTO } from "./GetBookByIdDTO";
import AppError from "../../../helpers/AppError";

export default class GetBookByIdUseCase{
    constructor(private readonly bookRespository:BookRepository){}
    async execute({id}:GetBookByIdDTO):Promise<Book>{
        const book = await this.bookRespository.getById(id)
        if(!book){
            throw new AppError(400,"This book doesn't exist");
        }
        return book;
    }
}