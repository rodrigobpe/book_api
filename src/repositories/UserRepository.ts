import { User } from "entities/User";

export interface UserRepository{
    create({email,name,password}:User):Promise<User>
    getByEmail(email:string):Promise<User | null>
}