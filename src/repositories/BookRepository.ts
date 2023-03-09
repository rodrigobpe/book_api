import { Book } from "../entities/Book";

export interface updateRequest{
    id:string
    title?:string
    author?:string
    price?:number
}

export interface BookRepository{
    create({author,price,title}:Book):Promise<void>;
    findByTitle(title:string):Promise<Book | null> 
    getAllBooks():Promise<Book[] | null>
    getById(id:string):Promise<Book | null>
    deleteBook(id:string):Promise<void>
    updateBook({author,price,title}:updateRequest):Promise<void>
}