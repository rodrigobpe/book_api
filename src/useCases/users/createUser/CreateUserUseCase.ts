import { User } from "../../../entities/User";
import AppError from "../../../helpers/AppError";
import { UserRepository } from "../../../repositories/UserRepository";
import { CreateUserDTO } from "./CreateUserDTO";
import { hashPassword } from "../../../helpers/hashPassword";

export default class CreateUserUseCase{
    constructor(private readonly userRepository:UserRepository){}
    async execute({email,name,password}:CreateUserDTO):Promise<User>{
        const userAlreadyExists = await this.userRepository.getByEmail(email);
        if(userAlreadyExists){
            throw new AppError(400,"User already exist!")
        }

        const user = await this.userRepository.create({
            email,
            name,
            password: await hashPassword(password)
        })

        return user
    }
}