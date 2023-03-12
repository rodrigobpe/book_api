import { prisma } from "../../database/index";
import { User } from "../../entities/User";
import { UserRepository } from "repositories/UserRepository";
import { UpdateUserRepoDTO } from "repositories/dtos/UserRepositoryDTO";

export default class UserPrismaRepository implements UserRepository {
    async getById(id_user: string): Promise<User | null> {
        const user = await prisma.user.findFirst({
            where: { id_user }
        })
        if(!user){
            return null
        }

        return user
    }
    
    async delete(id_user: string): Promise<void> {
        await prisma.user.delete({
            where: {
                id_user
            }
        })
    }

    async update({ id_user, email, name, password }: UpdateUserRepoDTO): Promise<void> {
        await prisma.user.update({
            data: {
                email,
                name,
                password
            },
            where: {
                id_user
            }
        })
    }
    async create({ email, name, password }: User): Promise<User> {
        return await prisma.user.create({
            data: {
                email,
                name,
                password
            }
        })

    }
    async getByEmail(email: string): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (!user) {
            return null
        }
        return user
    }

}