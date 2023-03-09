import { Book } from "../entities/Book";
import { updateRequest, getAllBooksDTO } from "./BookRepositoryDTO";

export interface BookRepository{
    create({author,price,title}:Book):Promise<void>;
    findByTitle(title:string):Promise<Book | null> 
    getAllBooks({author,price,title}:getAllBooksDTO):Promise<Book[] | null>
    getById(id:string):Promise<Book | null>
    deleteBook(id:string):Promise<void>
    updateBook({author,price,title}:updateRequest):Promise<void>
}