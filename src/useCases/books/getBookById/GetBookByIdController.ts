import { Request, Response } from "express";
import GetBookByIdUseCase from "./GetBookByIdUseCase";

export default class GetBookByIdController{
    constructor(private readonly getBookByIdUseCase:GetBookByIdUseCase){}
    async handle(req:Request,res:Response):Promise<Response>{
        const {id} = req.params
        const book = await this.getBookByIdUseCase.execute({id});
        return res.status(200).json({
            book
        })
    }
}