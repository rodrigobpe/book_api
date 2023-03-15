import {compareSync } from "bcrypt";
import jwt from 'jsonwebtoken'
import AppError from "../../helpers/AppError";
import { UserRepository } from "../../repositories/UserRepository";
import { LoginUserDTO, LoginUserTokenDTO } from "./LoginUserDTO";

export default class LoginUserUseCase{
    constructor(private readonly userRepository:UserRepository){}
    async execute({email,password}:LoginUserDTO):Promise<LoginUserTokenDTO>{
        const user = await this.userRepository.getByEmail(email);
        if(!user){
            throw new AppError(401,"Password or E-mail incorrects")
        }
        
        const passwordMatch = compareSync(password,user.password)
        if(!passwordMatch){
            throw new AppError(401,"Password or E-mail incorrects")
        }
        const token = jwt.sign({id:user.id}, process.env.JWT_TOKEN ?? '' , {
            subject:`${user.id}`,
            expiresIn:'6h'
        })

        const tokenResponse:LoginUserTokenDTO = {
            user:{
                email:user.email,
                name:user.name
            },
            token
        }
        return tokenResponse
    }
}