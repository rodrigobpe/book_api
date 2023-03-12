import { prisma } from "../../database/index";
import { User } from "../../entities/User";
import { UserRepository } from "repositories/UserRepository";

export default class UserPrismaRepository implements UserRepository{
    async create({ email, name, password }: User): Promise<User> {
        return await prisma.user.create({
            data:{
                email,
                name,
                password
            }
        })

    }
    async getByEmail(email: string): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where:{
                email
            }
        })

        if(!user){
            return null
        }
        return user
    }

}