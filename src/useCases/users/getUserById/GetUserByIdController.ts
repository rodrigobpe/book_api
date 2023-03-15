import { Request, Response } from "express";
import GetUserByIdUseCase from "./GetUserByIdUseCase";

export default class GetUserByIdController{
    constructor(private readonly getUserByIdUseCase:GetUserByIdUseCase){}
    async handle(req:Request,res:Response):Promise<Response>{
        const {id} = req.params
        const user = await this.getUserByIdUseCase.execute({id})
        return res.status(200).json({
            user
        })
    }
}