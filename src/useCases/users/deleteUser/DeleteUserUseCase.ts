import AppError from "../../../helpers/AppError";
import { UserRepository } from "../../../repositories/UserRepository";
import { DeleteUserDTO } from "./DeleteUserDTO";

export default class DeleteUserUseCase{
    constructor(private readonly userRepository:UserRepository){}
    async execute({id}:DeleteUserDTO):Promise<void>{
        const userAlreadyExist = await this.userRepository.getById(id)
        if(!userAlreadyExist){
            throw new AppError(400,"User doesn't exist")
        }
        await this.userRepository.delete(id)
    }
}