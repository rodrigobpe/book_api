import { Request,Response } from 'express'
import { GetAllUsersDTO } from './GetAllUsersDTO'
import GetAllUsersUseCase from './GetAllUsersUseCase'

export default class GetAllUsersController{
    constructor(private readonly getAllUsersUseCase:GetAllUsersUseCase){}
    async handle(req:Request,res:Response):Promise<Response>{
        const {email,name}:GetAllUsersDTO = req.query
        const users = await this.getAllUsersUseCase.execute({email,name});
        return res.status(200).json({
            lenght: users?.length,
            users
        })
    }
}