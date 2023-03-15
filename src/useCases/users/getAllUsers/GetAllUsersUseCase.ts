import AppError from "../../../helpers/AppError";
import UserPrismaRepository from "repositories/implementation/UserPrismaRepository";
import { GetAllUsersDTO } from "./GetAllUsersDTO";
import { User } from "entities/User";

export default class GetAllUsersUseCase{
    constructor(private readonly userRepository:UserPrismaRepository){}
    async execute({email,name}:GetAllUsersDTO):Promise<Omit<User,"password">[] | null> {
        const users = await this.userRepository.getAllUsers({email,name});
        if(users?.length === 0){
            throw new AppError(400,"There is no user")
        }
        return users
    }
}