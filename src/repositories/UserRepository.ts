import { User } from "entities/User";
import { UpdateUserRepoDTO, GetAllUsersRepoDTO } from "./dtos/UserRepositoryDTO";

export interface UserRepository{
    create({email,name,password}:User):Promise<User>
    getAllUsers({email,name}:GetAllUsersRepoDTO):Promise<Omit<User,"password">[] | null>
    getByEmail(email:string):Promise<User | null>
    delete(id_user:string):Promise<void>
    update({email,name,password}:UpdateUserRepoDTO):Promise<void>
    getById(ìd_user:string):Promise<Omit<User,"password"> | null> 
}