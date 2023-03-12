import { Book } from "../entities/Book";
import { UpdateBookRepoDTO, GetAllBooksRepoDTO } from "./dtos/BookRepositoryDTO";

export interface BookRepository{
    create({author,price,title}:Book):Promise<void>;
    findByTitle(title:string):Promise<Book | null> 
    getAllBooks({author,price,title,skip,take}:GetAllBooksRepoDTO):Promise<Book[] | null>
    getById(id:string):Promise<Book | null>
    deleteBook(id:string):Promise<void>
    updateBook({author,price,title}:UpdateBookRepoDTO):Promise<void>
}