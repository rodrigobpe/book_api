import { User } from "entities/User";
import AppError from "../../../helpers/AppError";
import { UserRepository } from "../../../repositories/UserRepository";
import { GetUserByIdDTO } from "./GetUserByIdDTO";

export default class GetUserByIdUseCase{
    constructor(private readonly userRepository:UserRepository){}
    async execute({id}:GetUserByIdDTO):Promise<Omit<User,"password"> | null> {
        const user = await this.userRepository.getById(id);
        if(!user){
            throw new AppError(400,"User doesn't exist")
        }
        return user
    }
}