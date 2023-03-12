import UserPrismaRepository from "../../../repositories/implementation/UserPrismaRepository";
import CreateUserController from "./CreateUserController";
import CreateUserUseCase from "./CreateUserUseCase";

const userPrismaRepository = new UserPrismaRepository()
const createUserUseCase = new CreateUserUseCase(userPrismaRepository)
export const createUserController = new CreateUserController(createUserUseCase)