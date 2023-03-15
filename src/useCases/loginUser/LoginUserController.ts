import { Request, Response } from "express";
import LoginUserUseCase from "./LoginUserUseCase";

export default class LoginUserController{
    constructor(private readonly loginUserUseCase:LoginUserUseCase){}
    async handle(req:Request,res:Response):Promise<Response>{
        const {password,email} = req.body
        const tokenResponse = await this.loginUserUseCase.execute({email,password});
        return res.status(200).json({tokenResponse})
    }
}