import { Request, Response } from "express";
import GetAllBooksUseCase from "./GetAllBooksUseCase";

export default class GetAllBooksController{
    constructor(private readonly getAllBooksUseCase: GetAllBooksUseCase ){}
    async handle(req:Request,res:Response):Promise<Response>{
        const {author,price,title,skip,take} = req.query
        const books = await this.getAllBooksUseCase.execute({author,price,title,skip,take});
        return res.status(200).json({
            length:books?.length,
            books
        })
    }
}