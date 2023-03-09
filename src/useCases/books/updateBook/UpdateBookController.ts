import { Request, Response } from "express";
import UpdateBookUseCase from "./UpdateBookUseCase";

export default class UpdateBookController{
    constructor(private readonly updateBookUseCase:UpdateBookUseCase){}
    async handle(req:Request,res:Response):Promise<Response>{
        const {id} = req.params;
        const {title,author,price} = req.body
        const updatedBook = await this.updateBookUseCase.execute({id,author,price,title})
        return res.status(201).json({
            message:"Book updated",
            updatedBook
        })
    }
}